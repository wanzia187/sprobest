<script lang="ts">
    import {superForm} from "sveltekit-superforms/client"
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    import {z} from "zod"
    import type {PageData} from "./$types"
    import ContactForm from "$lib/components/ContactForm.svelte";

    export let data: PageData;

    const schema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(2),
        message: z.string().min(2),
    });


    // Client API:
    const {form, errors, constraints, message, enhance} = superForm(data.form,
        // {
        //     taintedMessage: 'Please fill in all required fields',
        //     validators: schema,
        // }
    );
</script>
<form-container>
    <p>
        Contact Us!
    </p>
    <ContactForm {data}/>
</form-container>

<style>
    form-container {
        display: grid;
        max-width: 85%;
        width: 100%;
        gap: var(--spacing-sm);
        margin: var(--spacing-xl) auto 0;
        padding: var(--spacing-md);
    }


    p {
        color: var(--sprobest-light-secondary-text);

        text-decoration: none;
        font-size: var(--big-text-size);
        font-weight: bolder;
        text-align: center;
        margin-bottom: var(--spacing-md);
    }
</style>