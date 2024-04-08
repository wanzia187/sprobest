<script>
  import Card from "./../../lib/components/Card.svelte";
</script>

About Page
<page-container>
  <Card figurePosition="right" header="Company Vision" content="lorem  " />
  <Card figurePosition="left" header="Company Vision" content="lorem  " />
</page-container>

<style>
  page-container {
    height: 50vh;
    display: inline;
    margin-top: 50px;
    /* border: var(--debug); */
  }
</style>
