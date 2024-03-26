<script>
  import Navigation from "./../lib/components/Navigation.svelte";
</script>

<homepage>
  <logo>
    <!-- in case  -->
  </logo>
</homepage>

<style>
  homepage {
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url("/Users/meekdenzo/projects/sprobest/src/lib/images/homepage_main.png");
    background-image: linear-gradient(
        rgb(9, 9, 46, 0.2),
        rgb(7, 41, 7, 0.2),
        rgb(13, 13, 43, 0.2)
      ),
      url("/Users/meekdenzo/projects/sprobest/src/lib/images/homepage_main.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  logo {
    position: absolute;
    top: 5%;
    left: 5%;

    height: 200px;
    width: 200px;
    background-image: url("/Users/meekdenzo/projects/sprobest/src/lib/images/logo.png");
    /* background-color: #cccccc; Used if the image is unavailable */
    /* border: 2px solid #c0c0c0; */
    border-radius: 10px;
    /* padding: 8px; */
    /* background-position: center;  */
    background-repeat: no-repeat;
    background-size: fill;
  }
</style>
