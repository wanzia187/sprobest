<script>
    import BookingForm from "$lib/components/BookingForm.svelte";
</script>

<!-- Open the modal using ID.showModal() method -->
<button class="btn" style="background-color: var(--sprobest-dark-button)" onclick="my_modal_1.showModal()">Book Now</button>
<dialog id="my_modal_1" class="modal">
        <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
<!--            <button class="btn close-btn">Close</button>-->
            <button class="close-btn btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
    <div class="modal-box">
        <div class="modal-content">
            <BookingForm/>
            <!--            <p class="py-4">Press ESC key or click the button below to close</p>-->
        </div>
    </div>
</dialog>

<style>
    dialog {
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
        z-index: 1000;
    }

    .modal-box {
        position: relative;
        display: flex;
        /*flex-direction: column;*/
        align-items: center;
        justify-content: center;
        background: var(--sprobest-light-bg);
        border-radius: 1rem;
        padding: 1rem;
        max-width: 80%;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        overflow: clip;

        /*border: var(--debug);*/
    }

    .modal-content {
        position: relative;
        width: 100%;
        /*border: var(--debug);*/
    }

    .close-btn {
        background-color: var(--sprobest-light-bg-see-through);
        font-size: 1.5rem;
        display: grid;
        /*position: absolute;*/
        /*top: 1rem;*/
        /*right: 1rem;*/
    }
</style>