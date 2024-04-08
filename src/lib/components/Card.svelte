<script lang="ts">
  export let header: string = "";
  export let content: string = "";
  export let figurePosition: "left" | "right" = "left"; // Default to 'left'
</script>

<body>
  <div
    class="card lg:card-side bg-base-100 shadow-xl flex flex-row {figurePosition ===
    'right'
      ? 'flex-row-reverse'
      : ''}"
  >
    <figure class="order-{figurePosition === 'right' ? 2 : 1}">
      <img
        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
        alt="Album"
      />
    </figure>
    <div class="card-body order-{figurePosition === 'right' ? 2 : 1}">
      <h2 class="card-title">{header}</h2>
      <p>{content}</p>
      <div class="card-actions justify-end">
        <!-- <button class="btn btn-primary">Listen</button> -->
      </div>
    </div>
  </div>
</body>

<style>
  body {
    position: relative;
    display: inline;
    width: 95%;
    padding-top: 50px;
    /* border: var(--debug); */
  }
  .card {
    display: flex;
    flex-direction: row;
    box-shadow:
      0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-xl */
    max-width: 90%;
    margin: auto;
    /* border: var(--debug); */
  }
  .card-side {
    flex-direction: row; /* Adjust for side-by-side layout */
  }
  .card-body {
    padding: 1rem; /* Padding inside the card */
  }
  .card-title {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .card-actions {
    display: flex;
    justify-content: flex-end; /* Align actions to the end */
    margin-top: 1rem; /* Space above the actions */
  }
  .btn {
    background-color: #1f2937; /* Dark background */
    color: #ffffff; /* White text */
    padding: 0.5rem 1rem; /* Padding inside the button */
    border: none; /* No border */
    border-radius: 0.25rem; /* Rounded corners */
    cursor: pointer; /* Pointer cursor on hover */
    transition: background-color 0.2s ease; /* Smooth transition */
  }
  .btn:hover {
    background-color: #374151; /* Darker background on hover */
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }
  .order-1 {
    order: 1;
  }
  .order-2 {
    order: 2;
  }
</style>
