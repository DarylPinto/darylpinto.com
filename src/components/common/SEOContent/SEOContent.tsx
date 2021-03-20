import React from "react";
import { Blok } from "~/global/types";
import Head from "next/head";

interface Props {
	blok: Blok;
}

const SEOContent = ({ blok }: Props) => {
	if (!blok) return null;

	return (
		<Head>
			{/* Meta Title */}
			{blok.pageTitle && (
				<>
					<title>{blok.pageTitle}</title>
					<meta
						name="og:title"
						property="og:title"
						itemProp="name"
						content={blok.pageTitle}
					/>
				</>
			)}

			{/* Meta Description */}
			{blok.pageDescription && (
				<>
					<meta name="description" content={blok.pageDescription} />
					<meta
						name="og:description"
						property="og:description"
						itemProp="description"
						content={blok.pageDescription}
					/>
				</>
			)}

			{/* Opengraph Image (Social media image) */}
			{blok.socialMediaImage.filename && (
				<meta property="og:image" content={blok.socialMediaImage.filename} />
			)}
		</Head>
	);
};

export default SEOContent;
