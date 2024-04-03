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
</script>

<nav>
  <div class="nav-container">
    <!-- <a href="#home" class="logo">SPROBEST</a> -->
    <ul>
      {#each navLinks as link}
        <li>
          <a href={`#${link.label.toLowerCase().replace(/\s/g, "-")}`}>
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

<style>
  nav {
    padding: 10px;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1; /* Ensure the nav is on top of other elements */
    border: var(--debug);
  }

  nav:hover {
    background-color: rgba(
      115,
      114,
      114,
      0.8
    ); /* Transparent background color */
    border: 1px solid grey;
    border-radius: 10px;
  }

  .nav-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    border: var(--debug);
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
</style>
