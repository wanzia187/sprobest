<script>
  const navLinks = [
    {
      label: "About",
    },
    { label: "Services" },
    { label: "Contact" },
  ];
  let scrolled = false;
  let isMenuOpen = false;

  function handleScroll() {
    const scrollPosition = window.scrollY;
    scrolled = scrollPosition > 0;
  }

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function handleOutsideClick(event) {
    const menu = document.querySelector('ul');
    const menuToggle = document.querySelector('.menu-toggle');

    if (isMenuOpen && !menu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  }
</script>

<svelte:window on:scroll={handleScroll} on:click={handleOutsideClick} />

<nav class:scrolled class:open={isMenuOpen}>
  <div class="nav-container">
    <a href="/" class="logo">SPROBEST</a>
    <button class="menu-toggle" class:open={isMenuOpen} on:click={toggleMenu}>
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
    <ul class:open={isMenuOpen} on:click|stopPropagation>
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
    background: linear-gradient(to bottom, var(--sprobest-light-bg), transparent);
    transition: background 0.3s ease;
    z-index: 9999;
  }

  /*nav.scrolled {*/
  /*  background: var(--sprobest-dark-bg-see-through);*/
  /*}*/

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    /*border: var(--debug);*/
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
  }

  li {
    margin: 0 10px;
    position: relative;
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
    background-color: var(--sprobest-dark-button);
    color: var(--sprobest-dark-text);
  }

  li > ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: var(--sprobest-dark-bg);
    background-color: var(--sprobest-dark-button);
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

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
  }

  .bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--sprobest-light-text);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    nav.open {
      background: linear-gradient(to bottom, var(--sprobest-light-bg), transparent);
      background-color: var(--sprobest-light-bg);

    }
    ul {
      display: none;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      background-color: var(--sprobest-light-bg);
      /*background: linear-gradient(to bottom, var(--sprobest-light-bg), transparent);*/
      background: linear-gradient(to bottom, var(--sprobest-light-bg), rgb(236, 247, 235, 0.5));
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      z-index: 9999;

    }

    ul.open {
      display: flex;
    }

    li {
      margin: 10px 0;
    }

    li > ul {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      box-shadow: none;
      border-radius: 4px;
    }

    .menu-toggle {
      display: block;
    }

    .menu-toggle.open .bar:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .menu-toggle.open .bar:nth-child(2) {
      opacity: 0;
    }

    .menu-toggle.open .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
</style>