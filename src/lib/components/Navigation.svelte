<script>
  // Data Structure for your navigation
  const navLinks = [
    {
      label: "About",
    },
    { label: "Services" },
    // { label: "Blog" },
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
          <a class="nav-item" href={`${link.label.toLowerCase().replace(/\s/g, "-")}`}>
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  nav {
    color: var(--sprobest-light-text);

    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 1;
    background: linear-gradient(
      to bottom,
      var(--sprobest-light-bg),
      transparent
    );
    transition:
      background 0.3s ease;
    transition: all 0.3s;


    z-index: 9999;


    /*border: var(--debug);*/
  }

  nav:hover {
    color: var(--sprobest-dark-text);
    background: var(--sprobest-dark-bg-see-through);
    transition: all 0.3s;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    text-decoration: none;
    font-size: var(--big-text-size);
    font-weight: bolder;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;

    /*border: var(--debug);*/

  }

  li {
    margin: 0 10px;
    position: relative;

    /*border: var(--debug);*/

  }

  a {
    font-weight: bold;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: var(--tiny-text-size);
    transition: background-color 0.3s ease;
    transition: all 0.3s;

  }

  .nav-item:hover {
    font-size: var(--head-text-size);
    font-weight: bolder;
    background-color: var(--sprobest-dark-bg-see-through);
    /*border: 1px solid var(--sprobest-dark-text);*/
  }

  li > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--sprobest-dark-bg);
    padding: 10px;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  li:hover > ul {
    display: block;

    outline-offset: 3px;
    transition: all 0.3s;
  }
</style>
