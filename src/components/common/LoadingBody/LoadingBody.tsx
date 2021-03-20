import React from "react";
import Section from "~/components/common/Section";

const Loadingbody = () => {
	return (
		<Section>
			<div className="container">
				<div
					className="title is-2 has-text-centered"
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "50vh",
					}}
				>
					Loading...
				</div>
			</div>
		</Section>
	);
};

export default Loadingbody;
