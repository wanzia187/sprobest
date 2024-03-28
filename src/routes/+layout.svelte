<script>
  import Navigation from "./../lib/components/Navigation.svelte";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  import "../app.css";
</script>

<Navigation />
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
