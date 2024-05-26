<script>
  import Socials from "./Socials.svelte";
  import { fontOptions } from "$lib/fonts";

  let selectedFont = "Copperplate, fantasy";

  // const changeFontFamily = (event) => {
  //   selectedFont = event.target.value;
  // };

  const changeFontFamily = () => {
    const randomIndex = Math.floor(Math.random() * fontOptions.length);
    selectedFont = fontOptions[randomIndex].value;
  };
</script>

<homepage-container>
  <video autoplay muted loop id="background-video">
    <source src="https://live.staticflickr.com/video/53673783367/498aaf6f7a/1080p.mp4?s=eyJpIjo1MzY3Mzc4MzM2NywiZSI6MTcxNjUwODA0MiwicyI6ImQ3NzA0ZDJlMzEyNTA0Y2ExYTZmNDU0MmZhNmVhMjJkYzg3YjA3ZmYiLCJ2IjoxfQ" type="video/mp4">
    Your browser does not support the video tag.
  </video>
<!--  <logo>-->
<!--    &lt;!&ndash; in case &ndash;&gt;-->
<!--  </logo>-->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
<!--  <quote-->
<!--    class="bottom-right"-->
<!--    style="font-family: {selectedFont}"-->
<!--    on:click={changeFontFamily}-->
<!--  >-->
<!--    &lt;!&ndash; <div class="bottom-right" style="font-family: {selectedFont}"> &ndash;&gt;-->
<!--    Embark on your media journey with Sprobest Media Ltd. and let us capture the-->
<!--    essence of your moments while creating unforgettable experiences through extraordinary-->
<!--    visuals.-->
<!--    &lt;!&ndash; </div> &ndash;&gt;-->
<!--  </quote>-->
  <!-- <Socials /> -->
</homepage-container>

<style>
  /*homepage-container {*/
  /*  !* position: absolute; *!*/
  /*  display: inline-block;*/
  /*  min-height: 100vh;*/
  /*  width: 100%;*/
  /*  background-image: url("$lib/images/homepage_main.png");*/
  /*  background-image: linear-gradient(*/
  /*      rgb(9, 9, 46, 0.2),*/
  /*      rgb(7, 41, 7, 0.2),*/
  /*      rgb(13, 13, 43, 0.2)*/
  /*    ),*/
  /*    url("$lib/images/homepage_main.png");*/
  /*  background-position: center;*/
  /*  background-repeat: no-repeat;*/
  /*  background-size: cover;*/
  /*}*/
  homepage-container {
    position: relative;
    display: inline-block;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  #background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  logo {
    position: absolute;
    top: 10px;
    left: 10px;
    height: 175px;
    width: 175px;
    background-image: url("$lib/images/logo.png");
    background-color: white;
    border: 2px solid #c0c0c0;
    border-radius: 10px;
    /* padding: 8px; */
    /* background-position: center; */
    background-repeat: no-repeat;
    background-size: contain;
  }

  /* Bottom right text */
  .bottom-right {
    position: absolute;
    bottom: 70px;
    right: 16px;
    max-width: 40%;
    color: rgb(56, 54, 54);
    font-size: 18px;
    font-style: normal;
    font-variant: normal;
    font-weight: 70;
    /* line-height: 26.4px; */
    background-color: transparent;
  }
</style>
