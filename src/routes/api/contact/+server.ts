import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "./gmailConfig.server";

interface FormData {
    name: FormDataEntryValue | null;
    email: FormDataEntryValue | null;
    subject: FormDataEntryValue | null;
    message: FormDataEntryValue | null;
}

export const POST = async ({ request }) => {
    try {
        const formData: FormData = Object.fromEntries(await request.formData());
        const { name, email, subject, message } = formData;

        if (!name || !email || !subject || !message) {
            return {
                status: 400,
                body: { error: "Please fill in all required fields" },
            };
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

        await transporter.sendMail(mailOptions);

        return {
            status: 200,
            body: { success: "Email is sent" },
        };
    } catch (error) {
        console.error(error);
        return {
            status: 500,
            body: { error: "Failed to send email" },
        };
    }
};