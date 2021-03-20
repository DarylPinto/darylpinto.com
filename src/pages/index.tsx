import React from "react";
import { GetStaticProps } from "next";
import { StoryblokPage } from "~/global/types";
import StoryblokService from "~/util/storyblok-service";
import { getBlok } from "~/util/bloks";
import useStoryblokPageContent from "~/hooks/useStoryblokPageContent";
import SampleComponent from "~/components/common/SampleComponent";

interface Props {
	page: StoryblokPage;
}

const HomePage = ({ page }: Props) => {
	const pageContent = useStoryblokPageContent(page);

	return (
		<>
			<SampleComponent blok={getBlok(pageContent, "sample")} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	// ====== READ THIS ======
	// Replace `StoryblokService.getMock` with `StoryblokSerivce.get`
	// in order to pull real data from storyblok instead of fake data
	const page = await StoryblokService.getMock("cdn/stories/home");

	return {
		props: { page },
		revalidate: 1,
	};
};

export default HomePage;
