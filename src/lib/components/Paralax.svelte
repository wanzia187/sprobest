<script>
    import DropdownMenu from "./DropdownMenu.svelte";
    import QuickBookModal from "$lib/components/QuickBookModal.svelte";
    import Socials from "./Socials.svelte";
    // file:///Users/meekdenzo/projects/open-source/ui/parallax-01/index.html
</script>

<body>
<!--corporate events-->
<section>
    <h2>Corporate events</h2>
    <QuickBookModal/>
</section>
<div class="parallax-image parallax-image-01"></div>

<!--social events-->
<section>
    <h2>Social Events</h2>
    <QuickBookModal/>

</section>
<div class="parallax-image parallax-image-02"></div>

<!--cinematic podcasts-->
<section>
    <h2>Cinematic Podcats</h2>
    <QuickBookModal/>

</section>
<div class="parallax-image parallax-image-03"></div>
<!--<Socials/>-->
<div style="background-color: var(--footer-bg);">
    <br>
</div>
</body>

<style>
    body {
        width: 100%;
        font-family: Poppins, serif;
        height: 100vh;
        display: inline-block;
        place-items: center;
    }

    button {
        border: var(--debug);
    }

    p {
        font-size: 20px;
        color: var(--sprobest-light-text);
    }

    h2 {
        font-size: xx-large;
    }

    .parallax-image {
        display: block;
        height: 58.75rem;
        width: 100%;
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
    }

    .parallax-image-01 {
        /*background-image: url("$lib/images/coorparate.jpg");*/
        background-image: url("https://live.staticflickr.com/65535/53680344875_37bd478ad7_k.jpg");
        /*https://www.flickr.com/photos/sprobestmedia/53680344875/in/album-72177720316476850/*/
    }

    /*<a data-flickr-embed="true" href="https://www.flickr.com/photos/sprobestmedia/53680344875/in/album-72177720316476850/" title="_MG_0167"><img src="https://live.staticflickr.com/65535/53680344875_37bd478ad7_k.jpg" width="2048" height="1365" alt="_MG_0167"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>*/

    .parallax-image-02 {
        /*background-image: url("$lib/images/social_event.jpg");*/
        background-image: url("https://live.staticflickr.com/65535/53673980074_0bc0897d51_k.jpg");
    }

    /*<a data-flickr-embed="true" href="https://www.flickr.com/photos/sprobestmedia/53673980074/in/album-72177720316426961/" title="_MG_8832"><img src="https://live.staticflickr.com/65535/53673980074_0bc0897d51_k.jpg" width="2048" height="1554" alt="_MG_8832"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>*/

    .parallax-image-03 {
        /*background-image: url("$lib/images/winter_forest.jpg");*/
        background-image: url("https://live.staticflickr.com/65535/53672746962_8410c3a996_k.jpg");
    }

    /*<a data-flickr-embed="true" href="https://www.flickr.com/photos/sprobestmedia/53672746962/in/album-72177720316410265/" title="IMG_1279"><img src="https://live.staticflickr.com/65535/53672746962_8410c3a996_k.jpg" width="2048" height="1365" alt="IMG_1279"/></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>*/

    section {
        padding: 4rem;
    }

    section > h2 {
        text-transform: uppercase;
        margin-bottom: 1.5rem;
    }
</style>
