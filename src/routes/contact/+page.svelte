<script lang="ts">
    import {superForm} from "sveltekit-superforms/client"
    import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"
    import {z} from "zod"
    import type {PageData} from "./$types"

    export let data: PageData;

    const schema = z.object({
        name: z.string().min(2),
        email: z.string().email()
    });


    // Client API:
    const {form, errors, constraints, message, enhance} = superForm(data.form,
        // {
        //     taintedMessage: 'Please fill in all required fields',
        //     validators: schema,
        // }
    );
</script>

<div>
    {#each Array(10) as _, i}
        <br>    {/each}
</div>
<SuperDebug data={$form}/>
<br>
<article>

    {#if $message}<h3>{$message}</h3>{/if}

    <form method="POST" use:enhance>
        <label for="name">Name</label>
        <input
                type="text"
                name="name"
                id="name"
                bind:value={$form.name}
        />
        {#if $errors.name}<small class="invalid">{$errors.name}</small>{/if}

        <label for="email">E-mail</label>
        <input
                type="email"
                name="email"
                id="email"
                bind:value={$form.email}
        />
        {#if $errors.email}<small class="invalid">{$errors.email}</small>{/if}

        <div>
            <button>Submit</button>
        </div>
    </form>
</article>

<style>
    .invalid {
        color: red;
    }

    input {
        border: 1px solid red;
        background: white;
    }
</style>