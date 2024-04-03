<script>
  import MyImage from "$lib/images/icons/instagram.svg";
</script>

<body>
  <span class="background">
    <span class="social-media-buttons">
      <span class="social-media-button">
        <!-- <enhanced:img src="$lib/images/icons/instagram.svg" alt="Instagram" /> -->
        <!-- <enhanced:img src={MyImage} alt="Some alt text" /> -->
        <!-- <img alt="Instagram" src="$lib/images/icons/instagram.svg" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-instagram"
          ><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path
            d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
          ></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg
        >
      </span>
      <span class="social-media-button">
        <!-- <img alt="Twitter" src="$lib/images/icons/twitter.svg" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-twitter"
          ><path
            d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
          ></path></svg
        >
      </span>
      <span class="social-media-button">
        <!-- <img alt="Youtube" src="$lib/images/icons/youtube.svg" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-youtube"
          ><path
            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
          ></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"
          ></polygon></svg
        >
      </span>
      <span class="social-media-button">
        <!-- <img alt="LinkedIn" src="$lib/images/icons/linkedin.svg" /> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-linkedin"
          ><path
            d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
          ></path><rect x="2" y="9" width="4" height="12"></rect><circle
            cx="4"
            cy="4"
            r="2"
          ></circle></svg
        >
      </span>
    </span>
  </span>
</body>

<style>
  :root {
    --background: #2c2c2c;
    --linkedin: #0a66c2;
    --youtube: #e52d27;
    --twitter: #1d9bf0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .background {
    background: var(--sprobest-light-bg-see-through);
    display: grid;
    place-items: center;
    height: 10vh;
  }

  .social-media-buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .social-media-button {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    outline: 2px solid white;
    cursor: pointer;
    transition: all 0.3s;
    display: grid;
    place-items: center;
  }

  .social-media-button:hover {
    outline-offset: 3px;
    transition: all 0.3s;
  }

  .social-media-button img {
    transition: all 0.3s;
  }

  .social-media-button:hover img {
    transform: scale(1.15);
  }

  .social-media-button:hover:nth-child(1) {
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
  }

  .social-media-button:hover:nth-child(2) {
    background: var(--twitter);
  }

  .social-media-button:hover:nth-child(3) {
    background: var(--youtube);
  }

  .social-media-button:hover:nth-child(4) {
    background: var(--linkedin);
  }
</style>
