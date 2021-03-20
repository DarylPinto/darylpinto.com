import React from "react";
import cx from "classnames";

interface Props {
	parentColor?: string;
	size?: number;
	state?: string;
	fullWidth?: boolean;
	className?: string;
	children: any;
}

const SectionButton = ({
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

	return (
		<button className={buttonClasses} {...rest}>
			{children}
		</button>
	);
};

export default SectionButton;
