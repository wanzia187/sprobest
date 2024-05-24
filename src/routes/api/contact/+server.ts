import {json} from "@sveltejs/kit";

import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/utils/gmailConfig.server";

interface FormData {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    subject: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
}

// @ts-ignore
export const POST = async ({ request }) => {
    try {
        // @ts-ignore
        const formData: FormData = Object.fromEntries(await request.formData());
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            return json({ error: "Please fill in all required fields" }, { status: 400 });
        }

        const html = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;

        const mailOptions = {
            from: GOOGLE_EMAIL,
            to: GOOGLE_EMAIL,
            bcc: email, // Send a copy to the user's email
            subject: `New message from ${name} - ${subject}`,
            text: message,
            html: html,
        };

        // @ts-ignore
        await transporter.sendMail(mailOptions);

        return json({ success: "Email is sent" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return json({ error: "Failed to send email" }, { status: 500 });
    }
};