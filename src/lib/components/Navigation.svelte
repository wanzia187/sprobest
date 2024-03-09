<script>
  // Data Structure for your navigation
  const navLinks = [
    {
      label: "About",
      items: [{ label: "" }],
      //   items: [
      //     { label: "COMPANY SUMMARY" },
      //     { label: "Mission & Vision" },
      //     { label: "Values" },
      //     {
      //       label: "Team",
      //       items: [
      //         { label: "Board of Directors" },
      //         { label: "EXECUTIVE MANAGEMENT" },
      //       ],
      //     },
      //     { label: "INSTITUTION CERTIFICATE NUMBERS" },
      //     { label: "SOME OF OUR CLIENTS INCLUDE" },
      //   ],
    },
    { label: "Services" },
    { label: "Blog" },
    { label: "Contact" },
  ];
</script>

<nav>
  <ul>
    <a href="/">SPROBEST</a>
    {#each navLinks as link}
      <li>
        <a href="/{link.label}">
          {link.label}
        </a>
        {#if link.items}
          <ul>
            {#each link.items as sublink}
              <li>
                <a href="/{link.label}/{sublink.label}">
                  {sublink.label}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    background-color: #333;
    padding: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
  }

  li {
    margin: 0;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
