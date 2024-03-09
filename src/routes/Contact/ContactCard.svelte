<script>
  // Replace with your actual contact information

  const contactInfo = {
    companyName: "SProbest Media Limited",
    address:
      "Plot 32/F/E/2/1045 Off Ngwerere Road, Chelstone Madido, Lusaka, Zambia",
    email: "sprobestmedia@gmail.com",
    phone: "+260964387471",
    whatsapp: "+260972755554",
    youtubeUrl: "https://www.youtube.com/@sprobestmedia",
    founder: "Adess Tembo",
    facebookUrl: "www.facebook.com/sprobest",
    linkedInUrl: "https://www.linkedin.com/company/sprobest-media/",
  };
</script>

To make the icon smaller and fit better with the text, you can adjust the size
of the SVG icon and modify the layout. Here's the modified code: ```html
<section class="contact-info">
  <h2>{contactInfo.companyName}</h2>
  <p>{contactInfo.address}</p>
  <p><a href="mailto:{contactInfo.email}">{contactInfo.email}</a></p>
  <p><a href="tel:{contactInfo.phone}">Contact: {contactInfo.phone}</a></p>
  <p><a href={contactInfo.whatsapp}>WhatsApp: {contactInfo.whatsapp}</a></p>
  <p>
    <i class="fa-brands fa-youtube"></i>
    <a href={contactInfo.youtubeUrl}>YouTube</a> | SProbest Media
  </p>
  <p>Founder: {contactInfo.founder}</p>
  <p>
    <a href={contactInfo.facebookUrl}>Facebook</a> | SProbest Media
  </p>
  <p><a href={contactInfo.linkedInUrl}>LinkedIn</a> | SProbest Media</p>
</section>
``` This modification sets the width and height of the SVG to 16, making it smaller.
Adjust the size as needed for your layout.

<style>
  .contact-info {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    text-align: left; /* Or 'left' if you prefer  */
  }

  .links a,
  .social-links a {
    color: #337ab7; /* Default link color */
    text-decoration: none;
  }

  .links a:hover,
  .social-links a:hover {
    text-decoration: underline;
  }
</style>
