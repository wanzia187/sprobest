<script>
  import Navigation from "../lib/components/Navigation.svelte";
  import "@fortawesome/fontawesome-free/css/all.min.css";

  import "../app.css";
  import Socials from "$lib/components/Socials.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import {
    companyLinks,
    developerLinks,
    logo,
    productLinks,
    resourceLinks,
    socialLinks,
  } from "$lib/footerData";
</script>

<Navigation />
<slot />
<Socials />
<Footer
  {logo}
  {socialLinks}
  {productLinks}
  {resourceLinks}
  {developerLinks}
  {companyLinks}
/>
