<script lang="ts">
  // source: file:///Users/meekdenzo/projects/open-source/ui/footer-05/index.html
  import type { SvelteComponentTyped } from "svelte";

  import {
    logo,
    socialLinks,
    productLinks,
    resourceLinks,
    developerLinks,
    companyLinks,
  } from "../footerData";

  interface Link {
    title: string;
    url: string;
    icon?: string;
  }

  let currentYear: number = new Date().getFullYear();
</script>

<footer>
  <div class="footer-wrapper">
    <div class="footer-columns">
      <div class="footer-logo-column">
        <a href="/" aria-label="Go to homepage" title="Go to Homepage">
          <img
            src={logo}
            loading="lazy"
            alt="Logo"
            class="footer-logo"
            width="200"
          />
        </a>
        <div class="social-wrapper">
          <div class="social-links">
            <ul>
              {#each socialLinks as link}
                <li>
                  <a href={link.url} title={link.title}>
                    {@html link.icon}
                  </a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      </div>
      <div class="link-columns">
        <div>
          <section>
            <h3>Product</h3>
            <ul>
              {#each productLinks as link}
                <li>
                  <a href={link.url} title={link.title}>{link.title}</a>
                </li>
              {/each}
            </ul>
          </section>

          <section>
            <h3>Resources</h3>
            <ul>
              {#each resourceLinks as link}
                <li>
                  <a href={link.url} title={link.title}>{link.title}</a>
                </li>
              {/each}
            </ul>
          </section>
        </div>
        <div>
          <section>
            <h3>Developers</h3>
            <ul>
              {#each developerLinks as link}
                <li>
                  <a href={link.url} title={link.title}>{link.title}</a>
                </li>
              {/each}
            </ul>
          </section>
          <section>
            <h3>Company</h3>
            <ul>
              {#each companyLinks as link}
                <li>
                  <a href={link.url} title={link.title}>{link.title}</a>
                </li>
              {/each}
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
  <!-- bottom part section -->
  <div class="footer-bottom">
    <div class="footer-bottom-wrapper">
      <small>© {currentYear} Your Company Name</small>
    </div>
  </div>
</footer>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

  :root {
    --primary: #3ecf8e;
    --primary-dark: #37996b;
    --primary-darker: #317f5a;
    --headline-color: #f9f9f9;
    --text-color: #7e7e7e;
    --bg: #1c1c1c;
    --footer-bg: #161616;
    --secondary: #2e2e2e;
    --footer-border: #3e3e3e;
    --gray-border-hover: #505050;
    --gray-menu-button: #7e7e7e;
    --gray-menu-button-hover: #232323;
    --navbar-height: 64px;
    --gray-text-hover: #8f8f8f;
    --gray-icon: #a0a0a0;
    --footer-width: 64rem;
  }

  /*? footer reset */
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    background: var(--bg);
    height: 100%;
    min-width: 18rem;
    overflow: auto;
  }

  main {
    height: 100%;
  }

  /*? footer containers */
  footer {
    /* position: absolute; */
    bottom: 0;
    background-color: var(--footer-bg);
    width: 100%;
    padding-top: 1rem;
    display: flex;
    display: inline-block;

    flex-direction: column;
  }

  *::selection {
    background: var(--primary);
    color: var(--footer-bg);
  }

  .footer-wrapper {
    display: flex;
    flex-direction: column;
    max-width: var(--footer-width);
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  .footer-columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 4rem;
    flex-wrap: wrap;
    padding-top: 1rem;
  }

  .footer-logo-column {
    padding-right: 10%;
  }

  .footer-logo {
    margin-bottom: 1.5rem;
    width: 14rem;
  }

  /*? socials */
  .social-wrapper {
    display: flex;
    gap: 0.5rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .social-links {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;
  }

  .social-links a {
    color: var(--text-color);
    text-decoration: none;
  }

  .social-links svg {
    width: 2.5rem;
    height: 2.5rem;
    stroke: var(--text-color);
    transition: all 0.2s ease-in-out;
  }

  .social-links svg:hover {
    stroke: var(--headline-color);
  }

  .social-links ul {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    list-style-type: none;
  }

  /* columns with links */

  .link-columns {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

    flex-grow: 1;
  }

  .link-columns > div {
    flex-grow: 1;
    display: flex;
    gap: 2rem;
  }

  .link-columns > div > section {
    min-width: 8rem;
    width: 50%;
  }

  .link-columns ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    margin: 0;
    flex-direction: column;
    font-weight: 600;
  }

  .link-columns ul a {
    color: var(--text-color);
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  .link-columns ul a:hover {
    color: var(--headline-color);
  }

  .link-columns h3 {
    color: var(--headline-color);
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  /*? Footer bottom */
  .footer-bottom {
    margin-top: 8rem;
    width: 100%;
    color: var(--text-color);
  }

  .footer-bottom-wrapper {
    max-width: var(--footer-width);
    margin: 0 auto;
    width: 100%;
    padding: 2.5rem 1rem;
    border-top: 1px solid var(--footer-border);
  }

  .footer-bottom small {
    font-size: 1rem;
    display: inline;
    white-space: nowrap;
  }

  .footer-bottom > small {
    font-size: 1rem;
    width: 100%;
  }

  @media screen and (min-width: 600px) {
    .link-columns > div > section {
      min-width: auto;
    }
  }
</style>
