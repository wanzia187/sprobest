<script>
  import ToastNotification from "./../lib/components/ToastNotification.svelte";
  import Paralax from "./../lib/components/Paralax.svelte";
  import Socials from "./../lib/components/Socials.svelte";
  import Accordion from "./../lib/components/Accordion.svelte";
  import Homepage from "./../lib/components/Homepage.svelte";
  import { accordionItems } from "$lib/accordionItems";
  import Footer from "$lib/components/Footer.svelte";
</script>

<page-container>
  <Homepage />
  <Paralax />
</page-container>

<style>
  page-container {
    /* display: contents; */
  }

  .container {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    background-color: yellow;
    /* important part */
    display: grid;
    place-items: center;
    grid-template-areas: "inner-div";
  }

  .inner {
    height: 100px;
    width: 100px;
    /* important part */
    grid-area: inner-div;
  }
</style>
