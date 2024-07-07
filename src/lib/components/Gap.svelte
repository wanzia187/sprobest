<script lang="ts">
    export let count: number = 1;
</script>

<div>
    {#each Array(count) as _, i}
        <br>
    {/each}
</div>
