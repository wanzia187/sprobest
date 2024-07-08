<script lang="ts">
    import { superForm } from "sveltekit-superforms/client";
    import type { SuperForm } from "sveltekit-superforms";
    import { z } from "zod";
    import SuperDebug from "sveltekit-superforms";
    import {bookingSchema} from "$lib/schemas";

    type BookingSchema = z.infer<typeof bookingSchema>;
    export let form: SuperForm<BookingSchema>;

    const { errors, constraints, enhance } = superForm(form);

    let serviceOptions = [
        { name: "Corporate Event", value: "service1" },
        { name: "Social Event", value: "service2" },
        { name: "Cinematic Podcast", value: "service3" },
    ];

    let isWhatsappSameAsPhone = false;
    let isMultiDayEvent = false;

    // $: if (isWhatsappSameAsPhone) {
    //     $form.whatsapp = $form.phone;
    // }
</script>
<SuperDebug data={$form} />
<form method="POST" use:enhance>
    <contact-details>
        <div class="input-group">
            <input type="text" class="input-field" placeholder=" " name="name" id="name" bind:value={$form.name} {...$constraints.name} />
            <label for="name" class="input-label">Name</label>
            {#if $errors.name}<small class="invalid">{$errors.name}</small>{/if}
        </div>

        <div class="input-group">
            <input type="text" class="input-field" placeholder=" " name="company" id="company" bind:value={$form.company} {...$constraints.company} />
            <label for="company" class="input-label">Company</label>
            {#if $errors.company}<small class="invalid">{$errors.company}</small>{/if}
        </div>
    </contact-details>

    <div class="input-group">
        <input type="email" class="input-field" placeholder=" " name="email" id="email" bind:value={$form.email} {...$constraints.email} />
        <label for="email" class="input-label">Your Email</label>
        {#if $errors.email}<small class="invalid">{$errors.email}</small>{/if}
    </div>

    <div class="input-group">
        <input type="tel" class="input-field" placeholder=" " name="phone" id="phone" bind:value={$form.phone} {...$constraints.phone} />
        <label for="phone" class="input-label">Phone Number</label>
        {#if $errors.phone}<small class="invalid">{$errors.phone}</small>{/if}
    </div>

    <div class="optional-text">
        <label>
            <input type="checkbox" bind:checked={isWhatsappSameAsPhone}>
            WhatsApp number is the same as phone number
        </label>
    </div>

    {#if !isWhatsappSameAsPhone}
        <div class="input-group">
            <input type="tel" class="input-field" placeholder=" " name="whatsapp" id="whatsapp" bind:value={$form.whatsapp} {...$constraints.whatsapp} />
            <label for="whatsapp" class="input-label">WhatsApp Number</label>
            {#if $errors.whatsapp}<small class="invalid">{$errors.whatsapp}</small>{/if}
        </div>
    {/if}

    <event class="input-group">
        <select class="input-field" id="event" bind:value={$form.eventType} {...$constraints.eventType}>
            <option disabled selected>Pick one</option>
            {#each serviceOptions as option}
                <option value={option.value}>{option.name}</option>
            {/each}
        </select>
        <label for="event" class="input-label">Select the type of event</label>
        {#if $errors.eventType}<small class="invalid">{$errors.eventType}</small>{/if}
    </event>

    <event-date class="input-group">
        <input type="date" class="input-field" placeholder=" " name="start_date" id="start_date" bind:value={$form.startDate} {...$constraints.startDate} />
        <label for="start_date" class="input-label">Event Date</label>
        {#if $errors.startDate}<small class="invalid">{$errors.startDate}</small>{/if}
    </event-date>

    <div class="optional-text">
        <label>
            <input type="checkbox" bind:checked={isMultiDayEvent}>
            This is a multi-day event
        </label>
    </div>

    {#if isMultiDayEvent}
        <event-date class="input-group">
            <input type="date" class="input-field" placeholder=" " name="end_date" id="end_date" bind:value={$form.endDate} {...$constraints.endDate} />
            <label for="end_date" class="input-label">End Date</label>
            {#if $errors.endDate}<small class="invalid">{$errors.endDate}</small>{/if}
        </event-date>
    {/if}

    <event-location class="input-group">
        <input type="text" class="input-field" placeholder=" " name="location" id="location" bind:value={$form.location} {...$constraints.location} />
        <label for="location" class="input-label">Location</label>
        {#if $errors.location}<small class="invalid">{$errors.location}</small>{/if}
    </event-location>

    <input class="submit-button" type="submit" value="Book" />
</form>

<style>
    .select-field {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        appearance: none;
        height: 3rem/* 48px */;
        min-height: 3rem/* 48px */;
        padding-left: 1rem/* 16px */;
        padding-right: 2.5rem/* 40px */;
        font-size: 0.875rem/* 14px */;
        line-height: 1.25rem/* 20px */;
        border-color: transparent;
        background-color: transparent;
    }

    form {
        position: relative;
        display: grid;
        width: 100%;
        max-width: 1200px;
        gap: var(--spacing-sm);


        padding: 0;
        margin: 0 auto;

        /*border: var(--debug-2);*/
    }

    contact-details {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }

    event-time-date {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
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
        z-index: 2;
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

    .optional-text {
        font-size: var(--small-font-size);
        color: var(--sprobest-light-secondary-text);
        margin-top: -1rem;
        margin-left: 1rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        form {
            /*margin-top: var(--spacing-sm);*/
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
            padding: var(--spacing-sm);

            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
            overflow-y: scroll; /* Enable vertical scrolling */
        }

        /* For Chrome, Safari, and Opera */
        form::-webkit-scrollbar {
            display: none;
        }


        contact-details {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
        }

        event-time-date {
            grid-template-columns: 1fr;
            gap: var(--spacing-sm);
        }

        .submit-button {
            max-width: 100%;
        }
    }
</style>