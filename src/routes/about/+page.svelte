<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { aboutCardItems } from '$lib/aboutCardItems';
</script>

<!-- About Page -->
<page-container>
  {#each aboutCardItems as item, index}
    <Card
            cardImage={item.cardImage}
            figurePosition={index % 2 === 0 ? "left" : "right"}
            header={item.header}
    >
      {#each item.content as contentItem}
        {#if contentItem.subheader}
          <h3>{contentItem.subheader}</h3>
        {/if}
        <p>{contentItem.text}</p>
      {/each}
    </Card>
  {/each}
</page-container>

<style>
  page-container {
    height: 50vh;
    display: inline;
    padding-top: 50px;
    /*border: var(--debug);*/
  }
  h3 {
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }
  p {
    margin-bottom: 1em;
  }
</style>