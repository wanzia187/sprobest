<script lang="ts">
  import CompanySummary from "./CompanySummary.svelte";
  import Mission from "./Mission.svelte";
  import Institution from "./Institution.svelte"
  import Some from "./Some.svelte"
  import type { PageData } from "./$types";

  export let data: PageData;
</script>
<style>
    .container {
        display: flex;
        flex-direction: column; 
        justify-content: space-between;
        height: 1vh; 
    }

    .content {
        flex: 1; 
    }

    
    .text {
        font-size: 14px; 
        margin: 10px 0; 
    }
</style>



<div class="container">
  <div class="content">
    <CompanySummary></CompanySummary>
  </div>
  <div class="content">
    <Mission></Mission>
  </div>
  <div class="content">
    <Institution></Institution>
  </div>
  <div class="content">
    <Some></Some>
  </div>
</div>


