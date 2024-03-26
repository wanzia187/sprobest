<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<layout>
  <slot />
</layout>

<style>
  layout {
    display: inline;
    max-width: 100vw;
    width: 100vw;
  }
</style>
