import React from "react";

const LinkedInPixel = () => (
	<>
		<script
			dangerouslySetInnerHTML={{
				__html: `_linkedin_partner_id = "${process.env.NEXT_PUBLIC_LINKED_IN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();`,
			}}
		/>
		<noscript>
			<img
				height="1"
				width="1"
				style={{ display: "none" }}
				alt=""
				src={`https://px.ads.linkedin.com/collect/?pid=${process.env.NEXT_PUBLIC_LINKED_IN_PARTNER_ID}&fmt=gif`}
			/>
		</noscript>
	</>
);

export default LinkedInPixel;
