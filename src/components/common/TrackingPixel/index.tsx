import React from "react";
import FacebookPixel from "./FacebookPixel";
import LinkedInPixel from "./LinkedInPixel";
import ForensicPixel from "./ForensicPixel";

export enum Vendor {
	FACEBOOK = "FACEBOOK",
	LINKEDIN = "LINKEDIN",
	FORENSIC = "FORENSIC",
}

interface Props {
	vendor: Vendor;
}

const TrackingPixel = ({ vendor }: Props) => {
	switch (vendor) {
		case Vendor.FACEBOOK:
			return <FacebookPixel />;
		case Vendor.LINKEDIN:
			return <LinkedInPixel />;
		case Vendor.FORENSIC:
			return <ForensicPixel />;
		default:
			return null;
	}
};

export default TrackingPixel;
