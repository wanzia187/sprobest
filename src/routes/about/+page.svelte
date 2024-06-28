<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import { aboutCardItems } from '$lib/aboutCardItems';

  // Function to format content items into a single string
  function formatContent(contentItems) {
    return contentItems.map(item => {
      if (item.subheader) {
        return `${item.subheader}: ${item.text}`;
      }
      return item.text;
    }).join('\n\n');
  }
</script>

<outer-frame>
  <Card></Card>
</outer-frame>

<style>
  outer-frame {
    position: relative;
    display: flex;
    flex-direction: column;
    /*top: 2.5rem;*/
    /*padding: 2rem 1rem;*/

    /*border: var(--debug);*/
  }
</style>