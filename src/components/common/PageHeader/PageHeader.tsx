import React from "react";
import cx from "classnames";
import Section from "~/components/common/Section";
import StoryblokRichtext from "~/components/common/StoryblokRichtext";
import SbEditable from "storyblok-react";
import { Blok } from "~/global/types";
import s from "./PageHeader.module.scss";

/**
 * Page Header for the top of each content page
 */
interface Props {
	blok: Blok;
	icon: string;
	titleColor: string;
	subtitleColor: string;
	className: string;
	isPadded: boolean;
}

const PageHeader = ({
	blok,
	icon = null,
	titleColor = null,
	subtitleColor = null,
	className = "",
	isPadded = true,
}: Props) => {
	const pageHeaderClasses = cx(s.PageHeader, className, {
		"is-padded": isPadded,
	});

	const titleWrapperClasses = cx(s.titleWrapper, {
		"is-spaced": !!blok.body,
	});

	const titleClasses = cx("title is-1 is-size-3-mobile", {
		[`has-text-${titleColor}`]: titleColor,
	});

	const subtitleClasses = cx(s.subtitle, "subtitle", {
		[`has-text-${subtitleColor}`]: subtitleColor,
	});

	return (
		<SbEditable content={blok}>
			<Section
				color={blok.theme}
				backgroundImage={blok.backgroundImage.filename}
				backgroundImageOpacity={0.2}
				className={pageHeaderClasses}
			>
				<div className="container py-5">
					<div className={titleWrapperClasses}>
						{icon && (
							<span className={`${s.icon} mr-4`}>
								<img src={icon} alt={blok.heading} />
							</span>
						)}
						<h1 className={titleClasses}>{blok.heading}</h1>
					</div>
					<StoryblokRichtext richtext={blok.body} className={subtitleClasses} />
				</div>
			</Section>
		</SbEditable>
	);
};

export default PageHeader;
