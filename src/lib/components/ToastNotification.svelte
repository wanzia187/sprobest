<script lang="ts">
  import { onMount } from "svelte";

  let notification: HTMLElement;
  let button: HTMLElement;

  const toggleNotification = () => {
    notification.classList.remove("none");
    notification.classList.toggle("hide");
  };

  onMount(() => {
    document.addEventListener("click", (event) => {
      const isClickInsideNotification = notification.contains(
        event.target as Node
      );
      const isButtonClicked = button.contains(event.target as Node);

      if (!isClickInsideNotification && !isButtonClicked) {
        notification.classList.add("hide");
      }
    });
  });
</script>

<button class="trigger-button" on:click={toggleNotification}>
  Toggle Snackbar
</button>
<figure class="notification hide none" bind:this={notification}>
  <div class="notification__body">
    <div class="notification__body__first">
      <svg focusable="false" viewBox="0 0 24 24">
        <path
          d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,
                                8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 
                                4.31L15.77,2.74C14.61,2.26 13.34,2 
                                12,2A10,10 0 0,0 2,12A10,10 0 0,0 
                                12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,
                                16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
        ></path>
      </svg>
      <p>Your account has been created! &#128640;</p>
    </div>
    <svg
      on:click={toggleNotification}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18 6l-12 12"></path>
      <path d="M6 6l12 12"></path>
    </svg>
  </div>
</figure>

<style>
  :root {
    --success: #327b32;
    --text: #f2ecff;
    --background: #1f1f1f;
  }

  html {
    font-family: "Roboto";
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--background);
    display: grid;
    place-items: center;
    font-size: 16px;
    height: 100vh;
  }

  .trigger-button {
    background-color: white;
    border-radius: 0.5rem;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 0.8rem;
    min-height: 2.5rem;
    max-width: 10rem;
    width: 100%;
    font-weight: 600;
    transition: all 0.25s;
  }

  .trigger-button:hover {
    text-decoration: underline;
  }

  .notification {
    position: absolute;
    bottom: 1rem;
    padding: 0px 0.5rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    background-color: var(--success);
    color: var(--text);
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    animation: fadeInAnimation ease-in-out 0.25s forwards;
    box-shadow:
      0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14),
      0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  }

  .none {
    display: none;
  }

  .hide {
    visibility: hidden;
    animation: fadeOutAnimation ease-in-out 0.25s forwards;
  }

  .notification__body {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: clamp(0.8rem, 3vw, 1.2rem);
  }

  .notification__body__first {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
  }

  .notification__body__first > svg {
    height: 1.5rem;
    width: 1.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    fill: var(--text);
  }

  .notification__body > svg:nth-last-child(1) {
    cursor: pointer;
    margin: auto;
    min-width: 1.5rem;
    min-height: 1.5rem;
  }

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      min-height: 2.5rem;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      min-height: 3.75rem;
      visibility: visible;
    }
  }

  @keyframes fadeOutAnimation {
    0% {
      opacity: 1;
      min-height: 3.75rem;
      visibility: visible;
    }
    100% {
      opacity: 0;
      min-height: 2.5rem;
      visibility: hidden;
    }
  }

  @keyframes progress {
    to {
      transform: scaleX(1);
    }
  }
</style>
