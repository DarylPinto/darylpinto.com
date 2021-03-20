import { Blok, StoryblokPageContent, StoryblokRichtext } from "~/global/types";

/**
 * Gets a blok from Storyblok by name
 */
export const getBlok = (
	pageContent: StoryblokPageContent,
	blokName: string
): Blok => pageContent.body.find((blok) => blok.component === blokName);

/**
 * Converts an array of strings into a fake "richtext" object recognizable by
 * <StoryblokRichtext /> component
 */
export const fakeRichtext = (textArray: string[]): StoryblokRichtext => {
	return {
		type: "doc",
		content: textArray.map((text) => ({
			type: "paragraph",
			content: [
				{
					text,
					type: "text",
				},
			],
		})),
	};
};
