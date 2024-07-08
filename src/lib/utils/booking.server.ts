import {z} from 'zod';
import {message, superValidate} from 'sveltekit-superforms/server';
import {zod} from 'sveltekit-superforms/adapters';
import {fail} from '@sveltejs/kit';
import {GOOGLE_EMAIL} from '$env/static/private';
import transporter from '$lib/utils/gmailConfig.server';
import {bookingSchema} from "$lib/schemas";

// Load function to initialize the form
export const load = (async () => {
    const form = await superValidate(zod(bookingSchema));
    console.log(form);

    return {form};
});
// Actions for form processing
export const actions = {
    default: async ({request}: { request: Request }) => {

        try {
            const form = await superValidate(request, zod(bookingSchema));
            console.log(form);
            // Extract form data
            const {name, company, email, phone, whatsapp, eventType, startDate, endDate, location} = form.data;

            if (!form.valid) {
                return fail(400, {form});
            }

            // Prepare email content
            const html = `
                <h2>New Booking Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp || 'Same as phone'}</p>
                <p><strong>Event Type:</strong> ${eventType}</p>
                <p><strong>Start Date:</strong> ${startDate.toDateString()}</p>
                <p><strong>End Date:</strong> ${endDate ? endDate.toDateString() : 'N/A'}</p>
                <p><strong>Location:</strong> ${location}</p>
              `;

            // Configure email options
            const mailOptions = {
                from: GOOGLE_EMAIL,
                to: GOOGLE_EMAIL,
                bcc: email, // Send a copy to the user's email
                subject: `New Booking Request from ${name}`,
                html: html,
            };

            // Send email
            await transporter.sendMail(mailOptions);

            // Return success message
            return message(form, 'Booking request submitted successfully!');
        } catch (error) {
            console.error('Failed to process booking:', error);
            return fail(500, { error: 'Failed to process booking request'});
        }
    }
};