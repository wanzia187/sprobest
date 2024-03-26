<script lang="ts">
  import Services from "./Services.svelte";
  import Ourservices from "./Ourservices.svelte";
  import Otherservices from "./Otherservices.svelte";
  import Cinematic from "./Cinematic.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="container">
  <div class="content">
    <Services></Services>
  </div>
  <div class="content">
    <!-- <Ourservices></Ourservices> -->
  </div>
  <div class="content">
    <Otherservices></Otherservices>
  </div>
  <div class="content">
    <Cinematic></Cinematic>
  </div>
</div>

<style></style>
