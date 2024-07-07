<!--<script lang="ts">-->
<!--    import {superForm} from "sveltekit-superforms/client"-->
<!--    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"-->
<!--    import {z} from "zod"-->
<!--    import type {PageData} from "./$types"-->
<!--    import ContactForm from "$lib/components/ContactForm.svelte";-->
<!--    import Card from "$lib/components/Card.svelte";-->

<!--    export let data: PageData;-->

<!--    const schema = z.object({-->
<!--        name: z.string().min(2),-->
<!--        email: z.string().email(),-->
<!--        subject: z.string().min(2),-->
<!--        message: z.string().min(2),-->
<!--    });-->


<!--    // Client API:-->
<!--    // const {form, errors, constraints, message, enhance} = superForm(data.form,-->
<!--    //     // {-->
<!--    //     //     taintedMessage: 'Please fill in all required fields',-->
<!--    //     //     validators: schema,-->
<!--    //     // }-->
<!--    // );-->

<!--    const form = superForm(data.form);-->
<!--</script>-->

<!--<outer-frame>-->
<!--<form-container>-->
<!--    <p>-->
<!--        Contact Us!-->
<!--    </p>-->
<!--    <ContactForm {data}/>-->
<!--</form-container>-->
<!--</outer-frame>-->

<!--<style>-->
<!--    form-container {-->
<!--        display: grid;-->
<!--        max-width: 85%;-->
<!--        width: 100%;-->
<!--        /*min-height: 100vh;*/-->
<!--        gap: var(&#45;&#45;spacing-sm);-->
<!--        margin: var(&#45;&#45;spacing-xl) auto 0;-->
<!--        padding: var(&#45;&#45;spacing-md);-->
<!--    }-->


<!--    p {-->
<!--        color: var(&#45;&#45;sprobest-light-secondary-text);-->

<!--        text-decoration: none;-->
<!--        font-size: var(&#45;&#45;big-text-size);-->
<!--        font-weight: bolder;-->
<!--        text-align: center;-->
<!--        margin-bottom: var(&#45;&#45;spacing-md);-->
<!--    }-->

<!--    outer-frame {-->
<!--        min-height: 70vh;-->
<!--        margin: auto 0;-->
<!--        position: relative;-->
<!--        display: flex;-->
<!--        flex-direction: column;-->

<!--        bottom: 100px;-->
<!--        /*top: 2.5rem;*/-->
<!--        /*padding: 2rem 1rem;*/-->

<!--        /*border: var(&#45;&#45;debug);*/-->
<!--    }-->
<!--</style>-->

<script lang="ts">
    import {superForm} from "sveltekit-superforms/client";
    import {z} from "zod";
    import type {PageData} from "./$types";
    import ContactForm from "$lib/components/ContactForm.svelte";
    import SuperDebug from "sveltekit-superforms";
    import Gap from "$lib/components/Gap.svelte";

    export let data: PageData;

    const schema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(2),
        message: z.string().min(2),
    });

    // const form = superForm(data.form);

    const {form, errors, constraints, message, enhance} = superForm(data.form,
    );
</script>

<Gap count={5}/>

<!--<SuperDebug data={$form}/>-->
<ContactForm {form}/>
<Gap count={9}/>
