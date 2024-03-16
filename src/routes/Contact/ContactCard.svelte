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


<section class="contact-info">
  <h2>{contactInfo.companyName}</h2>
  <p>{contactInfo.address}</p>
  <div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:{contactInfo.email}">{contactInfo.email}</a>
  </div>
  <div class="contact-item">
    <i class="fa fa-phone"></i>
    <a href="tel:{contactInfo.phone}">{contactInfo.phone}</a>
  </div>
  <div class="contact-item">
    <i class="fab fa-whatsapp"></i>
    <a href={contactInfo.whatsapp}>{contactInfo.whatsapp}</a>
  </div>
  <div class="contact-item">
    <i class="fa-brands fa-youtube"></i>
    <a href={contactInfo.youtubeUrl}>YouTube | SProbest Media</a>
  </div>
  <p>Founder: {contactInfo.founder}</p>
  <div class="contact-item">
    <i class="fa-brands fa-facebook"></i>
    <a href={contactInfo.facebookUrl}>Facebook | SProbest Media</a>
  </div>
  <div class="contact-item">
    <i class="fa-brands fa-linkedin"></i>
    <a href={contactInfo.linkedInUrl}>LinkedIn | SProbest Media</a>
  </div>
</section>


<style>
  .contact-info {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    margin-bottom: 15px;
    color: #333;
    font-size: 24px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .contact-item i {
    font-size: 20px;
    margin-right: 10px;
    color: #5e5e5e; /* Adjust icon color */
  }

  .contact-item a {
    color: #007bff; /* Adjust link color */
    text-decoration: none;
    transition: color 0.3s ease; /* Add smooth transition */
  }

  .contact-item a:hover {
    color: #0056b3; /* Change link color on hover */
    text-decoration: underline;
  }
</style>
