<script>
  export let items = []; // Props for accordion items

  // State to track the open/close state of each accordion item
  let accordions = [];

  // Function to toggle the accordion item
  function toggleAccordion(index) {
    accordions[index].open = !accordions[index].open;
  }

  // Initialize accordions state on component mount
  import { onMount } from "svelte";
  onMount(() => {
    accordions = items.map(() => ({ open: false }));
  });
</script>

<div class="faq-container">
  {#each items as item, index}
    <details
      class:open={accordions[index]?.open}
      on:click={() => toggleAccordion(index)}
    >
      <summary>
        <span class="faq-title">{item.title}</span>
        <!-- <img src="assets/plus.svg" class="expand-icon" alt="Plus" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-circle-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#303651"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M9 12l6 0"></path>
          <path d="M12 9l0 6"></path>
        </svg>
      </summary>
      <div class="faq-content">
        {item.content}
      </div>
    </details>
  {/each}
</div>

<style>
  html {
    font-size: 16px;
    font-family: "Poppins";
  }
  body {
    background: white;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  .faq-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 12em;
  }
  details {
    font-size: 1rem;
    margin: 0 auto;
    width: 100%;
    background: #f6faff;
    border-radius: 0.5rem;
    position: relative;
    max-width: 600px;
    border: 1px solid #c3deff;
    transition: all 0.3s ease-in-out;
  }
  details:hover {
    border: 1px solid #a4a1ff;
  }
  summary {
    user-select: none;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    list-style: none;
    padding: 1rem;
    align-items: center;
  }
  summary:hover .faq-title {
    opacity: 1;
  }
  summary::-webkit-details-marker {
    display: none;
  }
  summary:focus {
    outline: none;
  }
  summary:hover .expand-icon {
    opacity: 1;
  }
  .faq-title {
    color: #1c2035;
    width: 90%;
    opacity: 0.65;
    transition: all 250ms ease-in-out;
  }
  .faq-content {
    color: #303651;
    padding: 0.2rem 1rem 1rem 1rem;
    font-weight: 300;
    line-height: 1.5;
  }
  .expand-icon {
    opacity: 0.65;
    pointer-events: none;
    position: absolute;
    right: 1rem;
    transition: all 150ms ease-out;
  }
</style>
