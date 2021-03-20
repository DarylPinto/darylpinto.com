import { useState, useEffect } from "react";
import { StoryblokPage, StoryblokPageContent } from "~/global/types";

/**
 * The `initEditor` method in `util/storyblok-service.js` is meant to be called on each page
 * in order to show live changes during editing in the storyblok backend.
 *
 * However, as it's defined here:
 * https://www.storyblok.com/tp/next-js-react-guide#create-a-storyblok-service
 * it ONLY supports pages that are made using class based components.
 *
 * This hook achieves the same functionality using a hook for functional page components.
 *
 * Example usage:
 *
 * ```
 * const HomePage = (props) => {
 *   const pageContent = useStoryblokPageContent(props.page);
 *
 *   return (
 *     <XyzComponent
 *       blok={pageContent.body.find((blok) => blok.component === "xyz")}
 *     />
 *   );
 * }
 *
 * export async function getStaticProps() {
 *   return {
 *     props: {
 *       page: await StoryblokService.get("cdn/stories/home"),
 *       revalidate: 1,
 *     },
 *   };
 * }
 * ```
 *
 * @param page - props.page data from `getStaticProps` call
 */
const useStoryblokPageContent = (page: StoryblokPage): StoryblokPageContent => {
	const [pageContent, setPageContent] = useState(page?.data.story.content);

	// Update content whenever data is entered in the CMS
	useEffect(() => {
		if (window.storyblok && pageContent) {
			window.storyblok.init();
			window.storyblok.on(["change", "published"], () =>
				window.location.reload()
			);

			// this will alter the state and replaces the current story
			// with a current raw story object (no resolved relations or links)
			window.storyblok.on("input", (event) => {
				if (event.story.content._uid === pageContent._uid) {
					setPageContent(
						window.storyblok.addComments(event.story.content, event.story.id)
					);
				}
			});
		}
	}, [pageContent]);

	// Update page content whenever page changes
	// Why would we need to do this? Because of next.js dynamic routes
	useEffect(() => {
		setPageContent(page?.data.story.content);
	}, [page]);

	return pageContent;
};

export default useStoryblokPageContent;
