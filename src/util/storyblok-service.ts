// https://www.storyblok.com/tp/next-js-react-guide#create-a-storyblok-service
import React from "react";
import StoryblokClient from "storyblok-js-client";
import { StoryblokPage } from "~/global/types";
import mockStoryblokData from "~/__mocks__/Storyblok.json";

class StoryblokService {
	devMode: boolean | string;
	token: string;
	client: any;
	query: object;

	constructor() {
		this.devMode = process.env.NODE_ENV === "development"; // Always loads draft
		this.token = process.env.NEXT_PUBLIC_STORYBLOK_API_KEY;
		this.client = new StoryblokClient({
			accessToken: this.token,
			cache: {
				// @ts-ignore
				type: "none",
				clear: "auto",
			},
		});

		this.query = {};
	}

	getCacheVersion() {
		return this.client.cacheVersion;
	}

	get(slug: string, params?: any): Promise<StoryblokPage> {
		params = params || {};

		if (
			this.getQuery("_storyblok") ||
			this.devMode ||
			(typeof window !== "undefined" && window.storyblok)
		) {
			params.version = "draft";
		}

		if (
			typeof window !== "undefined" &&
			typeof window.StoryblokCacheVersion !== "undefined"
		) {
			params.cv = window.StoryblokCacheVersion;
		}

		return this.client.get(slug, params);
	}

	// This method pulls data from __mocks__/Storyblock.json
	// instead of getting real data from storyblok.
	// Useful for demos and testing
	getMock(slug: string): Promise<StoryblokPage> {
		const key = slug.substr(slug.lastIndexOf("/"));
		return mockStoryblokData[key];
	}

	initEditor(reactComponent) {
		if (window.storyblok) {
			window.storyblok.init();
			window.storyblok.on(["change", "published"], () =>
				window.location.reload()
			);

			// this will alter the state and replaces the current story with a current raw story object (no resolved relations or links)
			window.storyblok.on("input", (event) => {
				if (
					event.story.content._uid === reactComponent.state.pageContent._uid
				) {
					reactComponent.setState({
						pageContent: window.storyblok.addComments(
							event.story.content,
							event.story.id
						),
					});
				}
			});
		}
	}

	setQuery(query) {
		this.query = query;
	}

	getQuery(param) {
		return this.query[param];
	}

	bridge() {
		if (!this.getQuery("_storyblok") && !this.devMode) {
			return "";
		}

		return React.createElement(
			"script",
			{ src: `//app.storyblok.com/f/storyblok-latest.js?t=${this.token}` },
			null
		);
	}
}

const storyblokInstance = new StoryblokService();

export default storyblokInstance;
