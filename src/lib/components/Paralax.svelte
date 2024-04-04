<script>
  import DropdownMenu from "./DropdownMenu.svelte";
  // file:///Users/meekdenzo/projects/open-source/ui/parallax-01/index.html
</script>

<body>
  <div class="parallax-image parallax-image-01"></div>
  <section>
    <!-- <h2>What We Do!</h2> -->
    <h2>Coorporate events</h2>
    <p>
      <!-- Sprobest Media Ltd, is a leading media company specializing in providing
      high-quality video conferencing and live streaming services, as well as
      exceptional film and editing services for corporate events, documentaries,
      weddings, and various social gatherings. With years of industry
      experience, our skilled team of professionals is dedicated to delivering
      outstanding media solutions that capture and immortalize your most
      important moments. We provide high-quality media solutions to individuals,
      businesses, and organizations across various industries. -->
      <br />
      <button> Book </button>
      <DropdownMenu item1="Meek" />
    </p>
  </section>
  <div class="parallax-image parallax-image-02"></div>
  <section>
    <!-- <h2>Mission</h2> -->
    <h2>Social Events</h2>

    <p>
      <!-- To provide unparalleled media services that inspire, inform, and empower
      audiences globally. Through innovative content creation, advanced
      technology utilization, and unwavering commitment to excellence, we strive
      to set the standard for media service delivery, enhancing the way people
      connect, engage, and perceive the world around them. -->
    </p>
    <button> Book </button>
  </section>
  <div class="parallax-image parallax-image-03"></div>
  <section>
    <h2>Vision</h2>
    <p>
      Our vision is to be the foremost leader in the media industry, recognized
      for our relentless pursuit of excellence, integrity, and creativity. We
      envision a future where our media services transcend boundaries, enriching
      lives, fostering understanding, and driving positive change on a global
      scale. By continuously pushing the boundaries of what media can achieve,
      we aspire to shape the future of communication, entertainment, and
      information dissemination.
    </p>
  </section>
  <div class="parallax-image parallax-image-01"></div>

  <section>
    <h2>Values</h2>
    <ul>
      <li>
        <strong>Integrity:</strong> We uphold the highest ethical standards in all
        aspects of our operations. Transparency, honesty, and accountability are
        fundamental to our relationships with employees, clients, partners, and the
        communities we serve.
      </li>
      <li>
        <strong>Innovation:</strong> We embrace innovation as the cornerstone of
        our success. We proactively seek new ideas, technologies, and approaches
        to media delivery, constantly pushing the boundaries to stay ahead in a rapidly
        evolving industry.
      </li>
      <li>
        <strong>Diversity and Inclusion:</strong> We celebrate diversity in all its
        forms and are committed to fostering an inclusive environment where everyone
        feels valued, respected, and empowered to contribute their unique perspectives
        and talents.
      </li>
      <li>
        <strong>Collaboration:</strong> We believe in the power of collaboration
        and teamwork. By fostering a culture of cooperation, communication, and mutual
        respect, we harness the collective talents of our diverse workforce to achieve
        our shared goals.
      </li>
      <li>
        <strong>Customer Focus:</strong> Our customers are at the heart of everything
        we do. We are dedicated to understanding their needs, exceeding their expectations,
        and delivering exceptional value through personalized, customer-centric media
        solutions.
      </li>
      <li>
        <strong>Social Responsibility:</strong> We recognize our responsibility to
        society and the planet. We are committed to making a positive impact through
        environmentally sustainable practices, community engagement, and support
        for social causes that align with our values.
      </li>
      <li>
        <strong>Continuous Learning:</strong> We embrace a culture of lifelong learning
        and personal development. We encourage curiosity, experimentation, and ongoing
        education to adapt to change, seize new opportunities, and stay at the forefront
        of the media industry.
      </li>
    </ul>
  </section>
</body>

<style>
  button {
    border: var(--debug);
  }
  :root {
    --background: #3c343d;
    --background-border: #6b626c;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Poppins;
    height: 100vh;
    display: grid;
    display: inline-block;
    place-items: center;
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
    background-image: url("$lib/images/coorparate.jpg");
    /* background-image: url("https://pbs.twimg.com/profile_images/1428055898207965184/vcS7CkO1_400x400.jpg"); */
  }

  .parallax-image-02 {
    background-image: url("$lib/images/forest_pathway.jpg");
  }

  .parallax-image-03 {
    background-image: url("$lib/images/winter_forest.jpg");
  }
  section {
    padding: 4rem;
  }

  section > h2 {
    text-transform: uppercase;
    margin-bottom: 1.5rem;
  }
</style>
