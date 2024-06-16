<script>
    import Modal from "$lib/components/Modal.svelte";
    import BookingForm from "$lib/components/BookingForm.svelte";
    import ContactForm from "$lib/components/ContactForm.svelte";
    // let clickOutsideModal = false;
    // let defaultModal = false;

</script>

<form-container>
    <p>
        Book a Service with Us!
    </p>
    <br/>
    <br/>
    <br/>
    <BookingForm/>
</form-container>

<style>
    form-container {
        display: grid;
        max-width: 85%;
        width: 100%;
        gap: var(--spacing-sm);
        margin: var(--spacing-xl) auto 0;
        padding: var(--spacing-md);
    }


    p {
        color: var(--sprobest-light-secondary-text);

        text-decoration: none;
        font-size: var(--big-text-size);
        font-weight: bolder;
        text-align: center;
        margin-bottom: var(--spacing-md);
    }
</style>
