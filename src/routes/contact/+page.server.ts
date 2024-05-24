import {message, superValidate} from 'sveltekit-superforms';
import {zod} from 'sveltekit-superforms/adapters';
import {z} from 'zod';
import {fail} from "@sveltejs/kit";
import {GOOGLE_EMAIL} from "$env/static/private";
import transporter from "$lib/utils/gmailConfig.server";

// Define outside the load function so the adapter can be cached
const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(2),
});

export const load = (async () => {
    const form = await superValidate(zod(schema));
    console.log(form);

    return {form};
});

export const actions = {
    default: async ({request}: { request: Request }) => {
        try {

            const form = await superValidate(request, zod(schema));
            console.log(form);
            const {name, email, subject, message: formMessage} = form.data;


            if (!form.valid) {
                // Again, return { form } and things will just work.
                return fail(400, {form});
            }

            // TODO: Do something with the validated form.data
            const html = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${formMessage}</p>
        `;

            const mailOptions = {
                from: GOOGLE_EMAIL,
                to: GOOGLE_EMAIL,
                bcc: email, // Send a copy to the user's email
                subject: `New message from ${name} - ${subject}`,
                text: formMessage,
                html: html,
            };

            // @ts-ignore
            await transporter.sendMail(mailOptions);

            // Display a success status message
            return message(form, 'Form posted successfully!');
        } catch (error) {
            console.error(error);
            return fail(500, {error: "Failed to send email"});
        }
    }
};