<script>

</script>

<homepage-container>
  <video autoplay muted loop id="background-video">
    <source src="https://live.staticflickr.com/video/53673783367/498aaf6f7a/1080p.mp4?s=eyJpIjo1MzY3Mzc4MzM2NywiZSI6MTcxNjUwODA0MiwicyI6ImQ3NzA0ZDJlMzEyNTA0Y2ExYTZmNDU0MmZhNmVhMjJkYzg3YjA3ZmYiLCJ2IjoxfQ" type="video/mp4">
<!--    <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4">-->

    Your browser does not support the video tag.
  </video>
<!--  <video src="https://www.youtube.com/embed/-aQH0ybMd3U?si=UTuLwYfKtLAIHA2g">-->
<!--    Your browser does not support the video tag.-->
<!--  </video>-->
</homepage-container>

<style>

  homepage-container {
    position: relative;
    display: inline-block;
    min-height: 100vh;
    width: 100%;
    /*overflow: hidden;*/
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
</style>
