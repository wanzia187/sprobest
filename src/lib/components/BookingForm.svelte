<script lang="ts">
    let serviceOptions = [
        {
            name: "Corporate Event",
            value: "service1"
        },
        {
            name: "Social Event",
            value: "service2"
        },
        {
            name: "Cinematic Podcast",
            value: "service3"
        },
    ]

</script>

<form>
    <!--contact details-->
    <contact-details>
        <div class="input-group">
            <input type="text" class="input-field" placeholder=" " name="name"/>
            <label for="name" class="input-label">Name</label>
        </div>

        <div class="input-group">
            <input type="text" class="input-field" placeholder=" " name="company"/>
            <label for="company" class="input-label">Company</label>
        </div>
    </contact-details>


    <div class="input-group">
        <input type="text" class="input-field" placeholder=" " name="email"/>
        <label for="email" class="input-label">Your Email</label>
    </div>

    <!--event details-->
    <event class="input-group">
        <select class="input-field">
                <option disabled selected>Pick one</option>
                {#each serviceOptions as option}
                    <option value="{option.value}">{option.name}</option>
                {/each}
        </select>
        <label for="event" class="input-label">Select the type of event</label>
    </event>

    <event-time-date>
        <event-date class="input-group">
            <input type="date" class="input-field" placeholder=" " name="date"/>
            <label for="date" class="input-label">Date</label>
        </event-date>

        <event-time class="input-group">
            <input type="time" min="00:00" max="23:59" class="input-field" placeholder=" " name="time"/>
            <label for="time" class="input-label">Time</label>
        </event-time>
    </event-time-date>

    <event-location class="input-group">
        <input type="text" class="input-field" placeholder=" " name="location"/>
        <label for="location" class="input-label">Location</label>
    </event-location>

    <input class="submit-button" type="submit" value="Book"/>

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
        /*display: inline;*/
        /* position: fixed; */
        /*   left: 100%;*/
        /*transform: translateX(50%);*/
        position: relative;
        /*max-width: 700px;*/
        display: grid;
        width: 100%;
        /*gap: 0.5rem;*/
        gap: var(--spacing-sm);
        /*margin-top: var(--spacing-xxl);*/
        padding: var(--spacing-xxl);;

        /*border: var(--debug);*/
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

    service-slection {
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
        /* background: var(--sprobest-dark-bg); */
    }

    .input-group {
        position: relative;
        height: 48px;
        margin-bottom: 1.5rem;
    }

    .invalid {
        position: absolute;
        bottom: -1.25rem; /* Adjust the value as needed */
        left: 0;
        color: red; /* Change the color as desired */
        font-size: 0.8rem; /* Adjust the font size as needed */
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
        /*z-index: 9999;*/
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
        z-index: 2;
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

    /*.invalid {*/
    /*    bottom: 0;*/
    /*    color: blue;*/
    /*}*/
</style>