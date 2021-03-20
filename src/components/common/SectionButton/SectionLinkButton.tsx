import React from "react";
import cx from "classnames";
import Link from "next/link";

interface Props {
	link: string;
	isExternal?: boolean;
	parentColor?: string;
	size?: number;
	state?: string;
	fullWidth?: boolean;
	className?: string;
	children: any;
}

const SectionLinkButton = ({
	link,
	isExternal,
	parentColor,
	size,
	state,
	fullWidth,
	className,
	children,
	...rest
}: Props) => {
	const isParentColorValid = [
		"primary",
		"info",
		"success",
		"warning",
		"danger",
		"black",
		"dark",
	].includes(parentColor);

	const buttonClasses = cx("button", {
		"is-fullwidth": fullWidth,
		[`is-${parentColor}`]: isParentColorValid,
		[`is-${size}`]: size,
		[`is-${state}`]: state,
	});

	return isExternal ? (
		<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className={buttonClasses}
			{...rest}
		>
			{children}
		</a>
	) : (
		<Link href={link}>
			<a className={buttonClasses} {...rest}>
				{children}
			</a>
		</Link>
	);
};

export default SectionLinkButton;
