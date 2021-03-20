import React from "react";
import cx from "classnames";
import BackgroundImage from "~/components/common/BackgroundImage";
import s from "./Section.module.scss";

interface Props {
	color?: string;
	size?: number;
	backgroundImage?: string;
	backgroundImageOpacity?: number;
	backgroundImageRepeat?: string;
	className?: string;
	children: any;
}

const Section = ({
	color,
	size,
	backgroundImage,
	backgroundImageOpacity,
	backgroundImageRepeat,
	className,
	children,
	...rest
}: Props) => {
	const sectionClasses = cx(
		s.SectionComponent,
		"hero section is-block is-relative",
		className,
		{
			[`is-${color}`]: color,
			[`is-${size}`]: size,
		}
	);

	return (
		<section className={sectionClasses} {...rest}>
			{backgroundImage && (
				<BackgroundImage
					image={backgroundImage}
					opacity={backgroundImageOpacity}
					repeat={backgroundImageRepeat}
				/>
			)}

			{children}
		</section>
	);
};

export default Section;
