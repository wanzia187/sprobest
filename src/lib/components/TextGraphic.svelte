<script>
  let cols = 50;
  let n = 800;
  let rows = Math.ceil(n / cols);
  let text = "SPROBEST MEDIA"; // Text to display
</script>

<main style="--cols:{cols}">
  {#each { length: n } as _, i}
    <div
      style="--x:{((i + 1) % cols) / cols}; --y:{(rows - Math.floor(i / cols)) /
        rows}"
    >
      {text[i % text.length]}
    </div>
  {/each}
</main>

<style>
  @property --t {
    syntax: "<integer>";
    initial-value: 0;
    inherits: true;
  }

  @keyframes tick {
    from {
      --t: 0;
    }
    to {
      --t: 86400000;
    }
  }

  :global(body) {
    background: black;
    display: grid;
    place-items: center;

    animation: tick 86400000ms linear infinite;
  }

  main {
    display: grid;
    grid-template-columns: repeat(var(--cols), 1fr);
    gap: 0px 6px;
    font-size: 10px;
    font-family: var(--main-font);
  }

  div {
    /* first offsetting x, then making it absolute */
    --offset-x: calc(var(--x) - 0.5);
    --abs-x: calc(max(var(--offset-x), -1 * var(--offset-x)));
    --offset-y: calc(var(--y) - 0.5);
    --abs-y: calc(max(var(--offset-y), -1 * var(--offset-y)));

    --l: calc(
      sin(var(--abs-x) / sin(var(--abs-y) * 3.6) * 3 - var(--t) / 400) * 100%
    );
    --h: calc(var(--abs-x) * 365deg);

    color: hsl(var(--h) 50% max(var(--l), 6%));
  }
</style>
