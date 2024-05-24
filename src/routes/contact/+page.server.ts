import {message, superValidate} from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import {fail} from "@sveltejs/kit";

// Define outside the load function so the adapter can be cached
const schema = z.object({
    name: z.string().min(2),
    email: z.string().email()
});

export const load = (async () => {
    const form = await superValidate(zod(schema));
    console.log(form);

    return { form };
});

export const actions = {
    default: async ({ request }: { request: Request }) => {
        const form = await superValidate(request, zod(schema));
        console.log(form);

        if (!form.valid) {
            // Again, return { form } and things will just work.
            return fail(400, { form });
        }

        // TODO: Do something with the validated form.data

        // Display a success status message
        return message(form, 'Form posted successfully!');
    }
};