const tz = { timeZone: "America/New_York" };

const logError = (err: Error, info = "No additional info"): void => {
	console.error(
		`
		===============================
		[ ERROR ]
		Time: ${new Date().toLocaleString("en-CA", tz)}
		Message: ${err.message || "none"}
		Info: ${info}
		-- Stack Trace Below --
		${err.stack}
		`
			.trim()
			.replace(/\t/g, "")
	);
};

export default logError;
