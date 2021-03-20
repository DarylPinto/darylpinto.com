import React from "react";
import cx from "classnames";
import s from "./BackgroundImage.module.scss";

interface Props {
	image: string;
	opacity: number;
	repeat?: boolean;
}

const BackgroundImage = ({ image, opacity = 1, repeat }: Props) => {
	return (
		<div
			className={cx(s.BackgroundImage, {
				[s.repeat]: repeat,
			})}
			style={{
				// @ts-ignore
				"--image": `url(${image})`,
				"--opacity": opacity,
			}}
		/>
	);
};

export default BackgroundImage;
