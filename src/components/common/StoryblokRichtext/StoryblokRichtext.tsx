import React from "react";
import { StoryblokRichtext as StoryblokRichtextType } from "~/global/types";
import cx from "classnames";
import StoryblokClient from "storyblok-js-client";
import s from "./StoryblokRichtext.module.scss";

const Storyblok = new StoryblokClient({
	accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_KEY,
});

/**
 * Component used to render Storyblok's "richtext" blok
 *
 * See here: https://www.storyblok.com/faq/how-to-render-the-rich-text-field-using-react-js
 */
interface Props {
	richtext: StoryblokRichtextType;
	className?: string;
}

const StoryblokRichtext = ({ richtext, className, ...rest }: Props) => {
	const markup = (richtext) => ({
		__html: Storyblok.richTextResolver.render(richtext),
	});

	const richtextClasses = cx(s.StoryblokRichtext, className);

	return (
		<div
			dangerouslySetInnerHTML={markup(richtext)}
			className={richtextClasses}
			{...rest}
		/>
	);
};

export default StoryblokRichtext;
