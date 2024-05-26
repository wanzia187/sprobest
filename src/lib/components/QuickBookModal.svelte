<script>
    import BookingForm from "$lib/components/BookingForm_OOG.svelte";
</script>

<!-- Open the modal using ID.showModal() method -->
<button class="btn" onclick="my_modal_1.showModal()">Book Now</button>
<dialog id="my_modal_1" class="modal">
    <div class="modal-box">
        <!--    <h3 class="font-bold text-lg">Hello!</h3>-->
        <BookingForm/>
        <p class="py-4">Press ESC key or click the button below to close</p>
        <div class="modal-action">
            <form method="dialog">
                <!-- if there is a button in form, it will close the modal -->
                <button class="btn">Close</button>
            </form>
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

        background: var(--sprobest-light-bg-see-through);
        border-radius: 1rem;
        padding: 1rem;
        /*width: 300px;*/
        /*width: 90vw;*/
        /*max-width: 90%;*/
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    }
</style>