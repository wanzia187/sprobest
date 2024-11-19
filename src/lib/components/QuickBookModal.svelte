<script lang="ts">
    import BookingForm from "$lib/components/BookingForm.svelte";
    import {onMount} from 'svelte';
    //import {SuperForm} from "sveltekit-superforms";
    //import {z} from "zod";

    export let selectedEvent: string;

    let isModalOpen = false;
    let modal;

    function openModal() {
        isModalOpen = true;
    }

    function closeModal() {
        isModalOpen = false;

        console.log("closeModal");
    }

    onMount(() => {
        const handleKeydown = (event) => {
            if (event.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    // export let form: SuperForm<typeof schema>;
    //
    // const schema = z.object({
    //     name: z.string().min(2),
    //     company: z.string().optional(),
    //     email: z.string().email(),
    //     phone: z.string().min(10),
    //     whatsapp: z.string().min(10).optional(),
    //     eventType: z.enum(["service1", "service2", "service3"]),
    //     startDate: z.date(),
    //     endDate: z.date().optional(),
    //     location: z.string().min(2),
    // });
</script>

<button class="btn" style="background-color: var(--sprobest-dark-button)" on:click={openModal}>Book Now</button>

{#if isModalOpen}
    <button class="close-btn btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={closeModal}>✕</button>
    <div class="modal-backdrop">
        <modal-box-container>

            <div class="modal-box" bind:this={modal} on:click|stopPropagation>
                <div class="modal-content">
                    <BookingForm {form} bind:value={selectedEvent}/>
                </div>
            </div>
        </modal-box-container>
    </div>
{/if}

<style>
    .modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        background: var(--sprobest-dark-bg-see-through);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 99999;

        /*border: var(--debug);*/

    }
    modal-box-container {
        /*overflow: hidden;*/
        width: 100%;
        /*position: relative;*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        background: var(--sprobest-light-bg);
        border-radius: 1rem;
        /*padding: 1rem;*/
        max-width: 75%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        /*overflow: clip;*/
        padding: 0;
        margin: 0;

        /*border: var(--debug);*/
        /*max-height: 80vh;*/
        /*overflow-y: auto;*/
        /*margin: var(--spacing-xxl) auto;*/

    }
    .modal-box {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--sprobest-light-bg);
        border-radius: 0;
        padding: 0;
        margin: 0;
        max-width: 100%;
        width: 100%;
        box-shadow: none;
        /*overflow: clip;*/

        /*border: var(--debug);*/
        /*border: none;*/
        /*max-height: 80vh;*/
        overflow-y: auto;
        /*margin: var(--spacing-xxl) auto;*/


    }

    .modal-box {

        scrollbar-width: thin;
        scrollbar-color: darkgrey transparent;

        -ms-overflow-style: none;
        /*scrollbar-width: none;*/
    }

    .modal-box::-webkit-scrollbar {

        background-color: darkgrey;
        /*border-radius: 10px;*/

        /*display: none;*/
    }

    .modal-content {
        position: relative;
        width: 100%;
    }

    .close-btn {

        position: fixed;
        background-color: var(--sprobest-light-bg-see-through);
        font-size: 1.5rem;
        display: grid;

        z-index: 999999;

        /*border: var(--debug);*/

    }
</style>