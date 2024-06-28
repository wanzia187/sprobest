<script lang="ts">
    import {superForm} from "sveltekit-superforms/client"
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    import {z} from "zod"
    import type {PageData} from "./$types"
    import ContactForm from "$lib/components/ContactForm.svelte";
    import Card from "$lib/components/Card.svelte";

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

<outer-frame>
<form-container>
    <p>
        Contact Us!
    </p>
    <ContactForm {data}/>
</form-container>
</outer-frame>

<style>
    form-container {
        display: grid;
        max-width: 85%;
        width: 100%;
        /*min-height: 100vh;*/
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

    outer-frame {
        min-height: 70vh;
        margin: auto 0;
        position: relative;
        display: flex;
        flex-direction: column;

        bottom: 100px;
        /*top: 2.5rem;*/
        /*padding: 2rem 1rem;*/

        /*border: var(--debug);*/
    }
</style>