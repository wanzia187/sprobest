<script>
  // Data Structure for your navigation
  const navLinks = [
    {
      label: "About",
      items: [
        { label: "Company Summary" },
        { label: "Mission & Vision" },
        { label: "Values" },
        {
          label: "Team",
          items: [
            { label: "Board of Directors" },
            { label: "Executive Management" },
          ],
        },
        { label: "Institution Certificate Numbers" },
        { label: "Some of Our Clients Include" },
      ],
    },
    { label: "Services" },
    { label: "Blog" },
    { label: "Contact" },
  ];
  let scrolled = false;

  function handleScroll() {
    const scrollPosition = window.scrollY;
    scrolled = scrollPosition > 0;
  }
</script>

<svelte:window on:scroll={handleScroll} />

<!-- <nav-container></nav-container> -->
<nav>
  <div class="nav-container">
    <a href="/" class="logo">SPROBEST</a>
    <ul>
      {#each navLinks as link}
        <li>
          <a href={`${link.label.toLowerCase().replace(/\s/g, "-")}`}>
            {link.label}
          </a>
          {#if link.items}
            <ul>
              {#each link.items as sublink}
                <li>
                  {#if sublink.items}
                    <span>{sublink.label}</span>
                    <ul>
                      {#each sublink.items as subsublink}
                        <li>
                          <a
                            href={`#${link.label.toLowerCase().replace(/\s/g, "-")}-${sublink.label.toLowerCase().replace(/\s/g, "-")}-${subsublink.label.toLowerCase().replace(/\s/g, "-")}`}
                          >
                            {subsublink.label}
                          </a>
                        </li>
                      {/each}
                    </ul>
                  {:else}
                    <a
                      href={`#${link.label.toLowerCase().replace(/\s/g, "-")}-${sublink.label.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      {sublink.label}
                    </a>
                  {/if}
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>

<!-- <style>
  nav {
    padding: 10px;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 80px;
    z-index: 1; /* Ensure the nav is on top of other elements */
    background: linear-gradient(
      to bottom,
      var(--sprobest-dark-bg),
      /* var(--sprobest-dark-bg-see-through), */ transparent
    );
    background: linear-gradient(
      to bottom,
      var(--sprobest-dark-bg),
      rgba(20, 29, 40, 0.8),
      rgba(20, 29, 40, 0.6),
      rgba(20, 29, 40, 0.4),
      rgba(20, 29, 40, 0.2),
      /* rgba(20, 29, 40, 0.1), */ transparent
    );
    /* border: var(--debug); */
  }

  nav:hover {
    background-color: rgba(
      115,
      114,
      114,
      0.8
    ); /* Transparent background color */
    background-color: var(--sprobest-dark-bg-see-through);
    border: 1px solid var(--sprobest-dark-bg-see-through);
    /* border-radius: 10px; */
  }

  .nav-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    /* border: var(--debug); */
  }

  .logo {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: auto;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 10px;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    background-color: rgba(
      115,
      114,
      114,
      0.8
    ); /* Transparent background color */
    border: 1px solid grey;
    background-color: var(--sprobest-dark-bg-see-through);
    border: 1px solid var(--sprobest-dark-bg-see-through);
    border-radius: 10px;
  }

  li > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: rgba(51, 51, 51, 0.8); /* Transparent background color */
    padding: 10px;
    z-index: 1;
  }

  li:hover > ul {
    display: block;
  }
</style> -->

<style>
  nav {
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      var(--sprobest-dark-bg),
      rgba(20, 29, 40, 0.8),
      rgba(20, 29, 40, 0.6),
      rgba(20, 29, 40, 0.4),
      rgba(20, 29, 40, 0.2),
      transparent
    );
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  nav:hover,
  :global(body.scrolled) nav {
    background-color: var(--sprobest-dark-bg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .nav-container {
    display: flex;
    justify-content: space-between; /* Align logo and nav links on opposite sides */
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    margin: 0 10px;
    position: relative;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 8px 12px; /* Add some padding to the links */
    border-radius: 4px; /* Add rounded corners to the links */
    transition: background-color 0.3s ease; /* Add a smooth transition for background color on hover */
  }

  a:hover {
    background-color: var(--sprobest-dark-bg-see-through);
  }

  li > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--sprobest-dark-bg);
    padding: 10px;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Add a subtle box shadow to the submenus */
    border-radius: 4px; /* Add rounded corners to the submenus */
  }

  li:hover > ul {
    display: block;
  }
</style>
