<!-- ContactForm.svelte -->
<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import type { SuperForm } from "sveltekit-superforms";
    import { z } from "zod";
    import Gap from "$lib/components/Gap.svelte";

    export let form: SuperForm<typeof schema>;

    const schema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        subject: z.string().min(2),
        message: z.string().min(2),
    });

    const { errors, constraints, enhance } = superForm(form);
</script>

<Gap />

<form method="POST" use:enhance>
    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="name" bind:value={$form.name} {...$constraints.name} />
        <label for="name" class="input-label">Your Name</label>
        {#if $errors.name}<small class="invalid">{$errors.name}</small>{/if}
    </div>

    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="email" bind:value={$form.email} {...$constraints.email} />
        <label for="email" class="input-label">Your Email</label>
        {#if $errors.email}<small class="invalid">{$errors.email}</small>{/if}
    </div>

    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="subject" bind:value={$form.subject} {...$constraints.subject} />
        <label for="subject" class="input-label">Subject</label>
        {#if $errors.subject}<small class="invalid">{$errors.subject}</small>{/if}
    </div>

    <textarea
            id="message"
            placeholder="Type your message here..."
            name="message"
            rows="4"
            cols="50"
            bind:value={$form.message}
            {...$constraints.message}
    ></textarea>
    {#if $errors.message}<small class="invalid">{$errors.message}</small>{/if}

    <input class="submit-button" type="submit" value="Send" />
<!--    <input type="hidden" name="replyTo" value="@" />-->
</form>

<!--<form method="POST" use:enhance>-->
<!--    <div class="input-group">-->
<!--        <input-->
<!--                type="text"-->
<!--                class="input-field"-->
<!--                placeholder=" "-->
<!--                name="name"-->
<!--                id="name"-->
<!--                bind:value={$form.name}-->
<!--        />-->
<!--        <label for="name" class="input-label">Your Name</label>-->
<!--        {#if $errors.name}<small class="invalid">{$errors.name}</small>{/if}-->
<!--    </div>-->
<!--    <div class="input-group">-->
<!--        <input-->
<!--                type="text"-->
<!--                class="input-field"-->
<!--                placeholder=" "-->
<!--                name="email"-->
<!--                id="email"-->
<!--                bind:value={$form.email}-->
<!--        />-->
<!--        <label for="email" class="input-label">Your Email</label>-->
<!--        {#if $errors.email}<small class="invalid">{$errors.email}</small>{/if}-->
<!--    </div>-->

<!--    <div class="input-group">-->
<!--        <input-->
<!--                type="text"-->
<!--                class="input-field"-->
<!--                placeholder=" "-->
<!--                name="subject"-->
<!--                id="subject"-->
<!--                bind:value={$form.subject}-->
<!--        />-->
<!--        <label for="subject" class="input-label">Subject</label>-->
<!--        {#if $errors.subject}<small class="invalid">{$errors.subject}</small>{/if}-->
<!--    </div>-->

<!--    <textarea-->
<!--            id="message"-->
<!--            placeholder="Type your message here..."-->
<!--            name="message"-->
<!--            rows="4"-->
<!--            cols="50"-->
<!--            bind:value={$form.message}-->
<!--    ></textarea>-->
<!--    {#if $errors.message}<small class="invalid">{$errors.message}</small>{/if}-->
<!--    <input class="submit-button" type="submit" value="Send" />-->

<!--    <input type="hidden" name="replyTo" value="@" />-->
<!--</form>-->


<style>
    form {
        position: relative;
        max-width: 700px;
        display: grid;
        width: 100%;
        gap: var(--spacing-sm);
        box-sizing: border-box;

        padding: 0;
        margin: 0 auto;

        /*border: var(--debug);*/
    }

    #message {
        font-size: var(--normal-font-size);
        border: 1px solid var(--sprobest-light-secondary-text);
        border-radius: 0.5rem;
        outline: none;
        padding: 1rem;
        background: none;
        min-height: 20rem;
    }

    .input-group {
        position: relative;
        height: 48px;
        margin-bottom: 1.5rem;
    }

    .invalid {
        position: absolute;
        bottom: -1.25rem;
        left: 0;
        color: red;
        font-size: 0.8rem;
    }

    .input-field {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: var(--normal-font-size);
        border: 1px solid var(--sprobest-light-secondary-text);
        border-radius: 0.5rem;
        outline: none;
        padding: 1rem;
        background: none;
        z-index: 1;
    }

    .input-label {
        position: absolute;
        left: var(--spacing-md);
        top: 50%;
        transform: translateY(-50%);
        color: var(--input-color);
        font-size: var(--normal-font-size);
        transition: 0.3s;
        z-index: 999;
    }

    .submit-button {
        display: block;
        max-width: 20%;
        padding: 0.75rem 2rem;
        outline: none;
        border: none;
        background-color: var(--sprobest-light-secondary-bg);
        color: var(--sprobest-light-text);
        font-size: var(--normal-font-size);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: 0.3s;
    }

    .submit-button:hover {
        border: 1.5px solid var(--sprobest-light-text);
    }

    .input-field:focus + .input-label,
    .input-field:not(:placeholder-shown).input-field:not(:focus) + .input-label {
        top: 0;
        left: var(--spacing-md);
        padding: 0 var(--spacing-sm);
        color: var(--sprobest-light-text);
        font-size: var(--small-font-size);
        font-weight: 500;
        z-index: 10;
        background-color: var(--sprobest-light-bg);
    }

    .input-field:focus {
        border: 1.5px solid var(--sprobest-light-text);
    }

    #message:focus {
        border: 1.5px solid var(--sprobest-light-text);
    }

    .success {
        color: green;
    }

    .error {
        color: red;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
        form {
            /*margin: var(--spacing-xl) auto;*/
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
            padding: var(--spacing-md);
            width: 100%;
            max-width: 100%;
        }

        .input-group,
        #message,
        .submit-button {
            width: 100%;
            box-sizing: border-box;
        }

        .submit-button {
            max-width: 100%;
        }
    }
</style>