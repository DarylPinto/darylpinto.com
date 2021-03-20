/**
 * Common types that are shared across the application.
 *
 * ONLY PUT TYPES/INTERFACES HERE IF YOU ARE UNBALE TO PUT
 * THEM CLOSER TO THEIR PLACE OF USE.
 */

// Extend the window object here
// stackoverflow.com/a/56458070
declare global {
	interface Window {
		storyblok: any;
		grecaptcha: any;
	}
}

export interface Blok {
	_uid: string;
	_editable: string;
	component: string;
	[key: string]: any;
}

export type StoryblokPageContent = {
	_uid: string;
	_editable: string;
	component: "page";
	body: any[];
};

export type StoryblokPage = {
	headers: any;
	data: {
		story: {
			name: string;
			created_at: Date;
			published_at: Date;
			alternates: any[];
			id: number;
			uuid: string;
			content: StoryblokPageContent;
			slug: string;
			full_slug: string;
			default_full_slug?: any;
			sort_by_date?: any;
			position: number;
			tag_list: any[];
			is_startpage: boolean;
			parent_id: number;
			meta_data?: any;
			group_id: string;
			first_published_at: Date;
			release_id?: any;
			lang: string;
			path: string;
			translated_slugs: any[];
		};
	};
};

export type StoryblokRichtext = {
	type: string;
	content: any;
};
