import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
import axios from "axios";
import {
	CONTACT_FORM_SENDER_EMAIL,
	CONTACT_FORM_RECIEVING_EMAIL,
} from "~/global/constants";

const MAX_FIELD_LENGTH = 1000;

const ContactAPI = async (req: NextApiRequest, res: NextApiResponse) => {
	// Ensure request is a POST request
	if (req.method !== "POST") {
		return res.status(405).json({
			status: 405,
			message: `Cannot ${req.method} this route`,
		});
	}

	// Ensure all required fields are present
	const requiredFields = ["name", "email", "message", "g-recaptcha-response"];
	const invalid = requiredFields.some((field) => req.body[field] === undefined);

	if (invalid) {
		return res.status(400).json({
			status: 400,
			message: "Required fields are missing",
		});
	}

	// Verify Google re-captcha
	const captchaCheck = await axios.post(
		`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${req.body["g-recaptcha-response"]}`
	);

	if (!captchaCheck.data.success) {
		return res.status(403).json({
			status: 403,
			message: "Spam detected",
		});
	}

	// Truncate body params for safety
	requiredFields.forEach((field) => {
		req.body[field] = req.body[field].substr(0, MAX_FIELD_LENGTH);
	});

	// Send email
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	await sgMail.send({
		to: CONTACT_FORM_RECIEVING_EMAIL,
		from: CONTACT_FORM_SENDER_EMAIL,
		html: `
			<p>[Name]: ${req.body.name}</p>
			<p>[Email]: ${req.body.email}</p>
			<p>[Message]: ${req.body.message}</p>
		`,
	});

	return res.json({ success: true });
};

export default ContactAPI;
