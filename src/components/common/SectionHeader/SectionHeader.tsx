import React from "react";
import cx from "classnames";
import s from "./SectionHeader.module.scss";

interface Props {
	title?: string;
	subtitle?: string;
	size?: number;
	spaced?: boolean;
	className?: string;
}

const SectionHeader = ({ title, subtitle, size, spaced, className }: Props) => {
	// Render nothing if no title or subtitle
	if (!title && !subtitle) {
		return null;
	}

	const headerClasses = cx(s.SectionHeader, className);
	const titleClasses = cx("title has-text-weight-bold", {
		[`is-${size}`]: size,
		"is-size-2-mobile": size === 1,
		"is-spaced": spaced,
	});
	const subtitleClasses = cx("subtitle", {
		"is-6": size > 4,
	});

	return (
		<header className={headerClasses}>
			{title && <h1 className={titleClasses}>{title}</h1>}

			{subtitle && (
				<p className={subtitleClasses}>
					<span className={s.inner}>{subtitle}</span>
				</p>
			)}
		</header>
	);
};

export default SectionHeader;
