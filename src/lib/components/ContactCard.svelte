<script lang="ts">
    //import {browser} from '$app/environment';
    import {enhance} from '$app/forms';
    import type {ActionData, SubmitFunction} from '@sveltejs/kit';

    let formData: ActionData;
    let formSubmitted = false;

    const submitForm: SubmitFunction = async ({ data, cancel }) => {
        let formData = Object.fromEntries(data);
        const { name, email, subject, message } = formData;

        // Validate form data
        if (!name || !email || !subject || !message) {
            formData = { error: 'Please fill in all required fields' };
            cancel();
            return async () => {};
        }

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, subject, message }),
        });

        if (!response.ok) {
            formData = { error: 'Failed to send email' };
            cancel();
        } else {
            formData = { success: 'Email sent successfully!' };
        }

        formSubmitted = true;
        return async () => {};
    };
</script>

<form         use:enhance={submitForm} on:submit="{submitForm}">
    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="name"/>
        <label for="name" class="input-label">Your Name</label>
    </div>

    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="email"/>
        <label for="email" class="input-label">Your Email</label>
    </div>

    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="subject"/>
        <label for="subject" class="input-label">Subject</label>
    </div>

    <textarea
            id="message"
            placeholder="Type your message here..."
            name="message"
            rows="4"
            cols="50"></textarea>
    <input class="submit-button" type="submit" value="Send"/>

    <input type="hidden" name="replyTo" value="@"/>
    <!-- <input type="hidden" name="redirectTo" value="/" /> -->

    {#if formData?.error}
        <p class="error">{formData.error}</p>
    {/if}

    {#if formData?.success}
        <p class="success">{formData.success}</p>
    {/if}

    <!--{#if !formSubmitted}-->
    <!--    <input class="submit-button" type="submit" value="Send"/>-->
    <!--{/if}-->
<!--    <input class="submit-button" type="submit" value="Send"/>-->
</form>

<style>
    form {
        /*display: inline;*/
        /* position: fixed; */
        /*   left: 100%;*/
        transform: translateX(50%);
        max-width: 700px;
        display: grid;
        width: 100%;
        /*gap: 0.5rem;*/
        gap: var(--spacing-sm);
        margin-top: var(--spacing-xxl);
        /*padding: 5rem 1rem 2rem;*/
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
        /* background: var(--sprobest-dark-bg); */
    }

    .input-group {
        position: relative;
        height: 48px;
        margin-bottom: 1.5rem;
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
        z-index: 9999;
        /*border: var(--debug);*/
    }

    .submit-button {
        display: block;
        /*margin: 0 auto; !*TBD*!*/
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
        /*box-shadow: 0 5px 16px black;*/
        /*box-shadow: 0 var(--spacing-xs) var(--spacing-xs) var(--sprobest-light-shadow);*/
        border: 1.5px solid var(--sprobest-light-text);
    }

    /* Move label up on input focus */

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
        /*border: var(--debug);*/
    }

    /* Border color change on input focus */
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

</style>
