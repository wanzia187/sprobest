<script lang="ts">
    export let cardImage: string | null = null;
    export let header: string = "";
    export let figurePosition: "left" | "right" = "left";
</script>

<card-container>
    <div class="card" class:card-no-image={!cardImage}>
        {#if cardImage}
            <figure
                    class="card-image"
                    class:order-1={figurePosition === "left"}
                    class:order-3={figurePosition === "right"}
                    style="background-image: url({cardImage})"
            >
            </figure>
        {/if}
        <div class="card-body-text" class:order-2={cardImage} class:full-width={!cardImage}>
            <div class="card-title" class:centered={!cardImage}>{header}</div>
            <slot></slot>
            <div class="card-actions justify-end">
                <!-- <button class="btn btn-primary">Listen</button> -->
            </div>
        </div>
    </div>
</card-container>

<style>
    card-container {
        position: relative;
        display: inline;
        width: 95%;
        padding: var(--spacing-md);
    }

    .card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 90%;
        min-height: 300px;
        margin: auto;
        background-color: var(--sprobest-light-bg);
        color: var(--sprobest-light-text);
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }

    .card-no-image {
        flex-direction: column;
    }

    .card-body-text {
        padding: var(--spacing-md);
        flex: 1;
    }

    .full-width {
        width: 100%;
    }

    .card-title {
        font-size: var(--head-text-size);
        margin-bottom: var(--spacing-sm);

        /*border: var(--debug);*/
        /*text-align: center;*/
        /*text-decoration-color: white;*/
        /*align-items: center;*/

    }

    .card-title.centered {
        text-align: center;
        text-decoration-color: white;
        align-items: center;
        /*border: var(--debug);*/
        margin: auto 0;
    }

    .card-image {
        min-width: 25%;
        max-width: 40%;
        background-size: cover;
        background-position: center;
    }

    .btn {
        background-color: var(--sprobest-light-bg-see-through);
        color: var(--sprobest-light-text);
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
    }

    .btn:hover {
        background-color: var(--sprobest-dark-button);
    }

    .order-1 { order: 1; }
    .order-2 { order: 2; }
    .order-3 { order: 3; }
</style>