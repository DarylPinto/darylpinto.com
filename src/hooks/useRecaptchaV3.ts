import { useState, useEffect } from "react";
import useScript from "~/hooks/useScript";

const useRecaptchaV3 = (actionName: string): string => {
	const [token, setToken] = useState("");
	const [loaded] = useScript(
		`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`
	);

	useEffect(() => {
		if (!loaded) return;

		window.grecaptcha.ready(function () {
			window.grecaptcha
				.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY, {
					action: actionName,
				})
				.then((token) => setToken(token));
		});
	}, [loaded, actionName]);

	return token;
};

export default useRecaptchaV3;
