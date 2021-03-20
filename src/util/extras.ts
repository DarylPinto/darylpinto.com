import { COLORS } from "~/global/constants";
import { StoryblokPage } from "~/global/types";
import StoryblokService from "~/util/storyblok-service";
import logError from "~/util/log-error";

/* Convert an ISO string to a readable date
 * example: 2011-10-05T14:48:00.000Z ---> March 10, 2011
 */
export const ISOStringToReadableDate = (ISOString: string): string => {
	const date = new Date(ISOString);

	const options = {
		month: "long",
		day: "numeric",
		year: "numeric",
	};

	return date.toLocaleDateString("en-US", options);
};

/**
 * Utility function to get paths for `getStaticPaths` function
 * from Storyblok.
 *
 * Example:
 *
 * ```
 * export const getStaticPaths = async () => {
 *   const paths = getStoryblokStaticPaths("blog", "post");
 *   return { paths, fallback: false }
 * }
 * ```
 *
 * @param basePath - Path to pass to StoryblokService.get `starts_with`  param
 * @param routeName - Name of the route used for the nextjs filename e.g. "post" for [post].js
 */
export const getStoryblokStaticPaths = async (
	basePath: string,
	routeName: string
): Promise<any[]> => {
	let pages = await StoryblokService.get("cdn/stories", {
		starts_with: basePath,
	});

	pages = pages.data.stories.filter(
		(story) => story.full_slug !== `${basePath}/`
	);

	return pages.map((page) => ({
		params: { [routeName]: page.slug },
	}));
};

/**
 * Utility function to get props for `getStaticProps` function
 * from Storyblok. Logs 404s and returns null if nothing is found.
 *
 * Example:
 *
 * ```
 * export async function getStaticProps({ params }) {
 *   const page = await getStoryblokStaticProps("blog", params.post);
 *   return {
 *     props: { page },
 *     revalidate: 1,
 *   };
 * }
 * ```
 *
 * @param basePath - Base path to pass to StoryblokService e.g. "blog"
 * @param slug - Slug used for the page itself e.g. "hello-world" for a blog post titled "Hello world"
 */
export const getStoryblokStaticProps = async (
	basePath: string,
	slug: string
): Promise<StoryblokPage> => {
	let page = null;

	try {
		page = await StoryblokService.get(`cdn/stories/${basePath}/${slug}`);
	} catch (err) {
		if (!err.message.includes("404")) {
			logError(err, `Tried to get static props for: ${basePath}/${slug}`);
		}
	}

	return page;
};

/**
 * Converts a string like "primary" or "secondary"
 * into the proper color value. This is useful
 * within the implementation of re-usable
 * components like `PatternContainer`
 * (example: <PatternContainer color="primary" />)
 *
 * This matches the behaviour of some stock components
 * like <Section color="primary" />
 *
 * @param name - Name of a color
 */
export const resolveColor = (name: string): string =>
	COLORS[name.toUpperCase()] || name;
