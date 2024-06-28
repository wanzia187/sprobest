<!-- ref: # Responsive card (vertical on small screen, horizontal on large screen) : <https://daisyui.com/components/card/> -->
<script lang="ts">
    export let cardImage: string = "";
    export let header: string = "";
    export let content: string = "";
    export let contentHeader: string = "";
    export let figurePosition: "left" | "right" = "left"; // Default to 'left'
</script>

<card-container>
    <!--    <div class="card lg:card-side bg-base-100 shadow-xl flex flex-row">-->
    <div class="card">
        {#if figurePosition === "right"}
            <!-- content here -->
            <div class="card-body-text order-2">
                <h2 class="card-title">{header}</h2>
                <h3>{contentHeader}</h3>
                <p>{content}</p>
                <div class="card-actions justify-end">
                    <!-- <button class="btn btn-primary">Listen</button> -->
                </div>
            </div>
            <figure class="card-image order-2" style="background-image: url({cardImage})">
<!--                <img src={cardImage} alt="Album"/>-->
            </figure>
        {:else}
            <!-- else content here -->
            <figure class="card-image order-1" style="background-image: url({cardImage})">
<!--                <img src={cardImage} alt="Album"/>-->
            </figure>
            <div class="card-body-text order-2">
                <h2 class="card-title">{header}</h2>
                <h3>{contentHeader}</h3>
                <p>{content}</p>
                <div class="card-actions justify-end">
                    <!-- <button class="btn btn-primary">Listen</button> -->
                </div>
            </div>
        {/if}
    </div>
</card-container>

<style>
    h3 {
        font-weight: bold;
    }
    card-container {
        position: relative;
        display: inline;
        width: 95%;
        padding: var(--spacing-md);
        /*border: var(--debug);*/
    }

    .card {
        /*padding: var(--spacing-md);*/
        /*padding-top: 50px;*/
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 90%;
        min-height: 500px;
        margin: auto;

        background-color: var(--sprobest-light-bg);
        color: var(--sprobest-light-text);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
        /*border: var(--debug);*/
    }

    .card-body-text {
        padding: var(--spacing-md);
        /*justify-content: center;*/
        /*max-width: 60%;*/
        /*border: var(--debug);*/
    }

    .card-title {
        text-align: center;
        font-size: var(--head-text-size);
        /*font-weight: 600;*/
        margin-bottom: var(--spacing-sm);
        /*border: var(--debug);*/
    }

    .card-image {
        min-width: 25%;
        max-width: 40%;

        background-size: cover;
        background-position: center;
        /*border: var(--debug);*/
    }

    /*.card-actions {*/
    /*    display: flex;*/
    /*    justify-content: flex-end; !* Align actions to the end *!*/
    /*    margin-top: var(--spacing-lg); !* Space above the actions *!*/
    /*    border: var(--debug);*/
    /*}*/

    .btn {
        background-color: var(--sprobest-light-bg-see-through); /* Dark background */
        color: var(--sprobest-light-text); /* White text */
        padding: 0.5rem 1rem; /* Padding inside the button */
        border: none; /* No border */
        border-radius: 0.25rem; /* Rounded corners */
        cursor: pointer; /* Pointer cursor on hover */
        transition: background-color 0.2s ease; /* Smooth transition */
    }

    .btn:hover {
        background-color: var(--sprobest-dark-button); /* Darker background on hover */
    }

    .flex-row-reverse {
        flex-direction: row-reverse;
    }

    .order-1 {
        order: 1;
    }

    .order-2 {
        order: 2;
    }
</style>
