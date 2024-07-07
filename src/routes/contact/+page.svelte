<script lang="ts">
    import {superForm} from "sveltekit-superforms/client";
    import {z} from "zod";
    import type {PageData} from "./$types";
    import ContactForm from "$lib/components/ContactForm.svelte";
    import SuperDebug from "sveltekit-superforms";
    import Gap from "$lib/components/Gap.svelte";

    export let data: PageData;

    const {form, errors, constraints, message, enhance} = superForm(data.form);
</script>

<Gap count={5}/>

<!--<SuperDebug data={$form}/>-->
<ContactForm {form}/>
<Gap count={9}/>
