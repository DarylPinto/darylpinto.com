import React from "react";
import { useLocalStorage } from "react-use";
import cx from "classnames";
import s from "./CookieBanner.module.scss";

const CookieBanner = () => {
	const [isAccepted, setIsAccepted] = useLocalStorage("cookiesAccepted");

	return isAccepted ? null : (
		<div className={cx(s.CookieBanner, "notification")}>
			<p>
				This site uses cookies to enhance the user experience. Continuing to
				browse indicates that you are okay with this.
			</p>
			<button
				className="button is-primary mt-3"
				onClick={() => setIsAccepted(true)}
			>
				Got it
			</button>
		</div>
	);
};

export default CookieBanner;
