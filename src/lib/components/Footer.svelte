<script lang="ts">
    // import DropdownMenu from "./DropdownMenu.svelte";
    // source: file:///Users/meekdenzo/projects/open-source/ui/footer-05/index.html
    import type {SvelteComponentTyped} from "svelte";

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
                <div class="social-media-buttons">
                        <ul class="social-media-button-wrapper">
                            {#each socialLinks as link}
                                <li class="social-media-button">
                                    <a href={link.url} title={link.title}>
                                        {@html link.icon}
                                    </a>
                                </li>
                            {/each}
                        </ul>
                </div>
            </div>
            <div class="link-columns">
                <section>
                    <h3>Media Services</h3>
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

                <section>
                    <h3>Partners</h3>
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
                                <a href={link.url} target="_blank" rel="noopener noreferrer"
                                   title={link.title}>{link.title} </a>
                            </li>
                        {/each}
                    </ul>
                </section>
            </div>
        </div>
    </div>
    <!-- bottom part section -->
    <div class="footer-bottom">
        <div class="footer-bottom-wrapper">
            <small>© {currentYear} SProbest Media LLC</small>
        </div>
    </div>
</footer>

<style>


    /*? footer reset */
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: var(--main-font);
        font-size: normal;
        background: var(--footer-bg);
        height: 100%;
        min-width: 18rem;
        overflow: auto;
    }

    main {
        height: 100%;
    }

    /*? footer containers */
    footer {
        /*position: absolute;*/
        bottom: 0;
        background-color: var(--footer-bg);
        /*background-color: var(--sprobest-light-button);*/
        width: 100%;
        padding-top: var(--spacing-xl);
        display: flex;
        display: inline-block;

        flex-direction: column;

        /*border: var(--debug);*/
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

        /*border: var(--debug);*/
    }

    .footer-columns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 4rem;
        flex-wrap: wrap;
        /*padding-top: 1rem;*/

        /*border: var(--debug);*/
    }

    .footer-logo-column {
        /*padding-right: 10%;*/
        display: flex;
        flex-direction: column;
        gap: 0px;

        /*padding: var(--spacing-md);*/
        justify-content: center;

        /*border: var(--debug-2);*/
    }

    .footer-logo {
        margin: 0 auto;
        margin-bottom: var(--spacing-md);
        width: 7rem;
        border-radius: var(--spacing-md);

        /*border: var(--debug);*/
    }

    /*? socials */

    .social-media-buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        /*flex-wrap: wrap;*/
        gap: 1rem;

        /*border: var(--debug-2);*/

    }

    .social-media-button-wrapper {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: var(--spacing-sm);
        width: 100%;
        /*gap: 1rem;*/

        /*border: var(--debug);*/
    }
    .social-media-button {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border-radius: 10px;
        outline: 1px solid white;
        cursor: pointer;
        transition: all 0.3s;
        /*display: inline-flex;*/
        display: grid;

        gap: 0.5rem;
        align-items: center;
        place-items: center;
    }

    .social-media-button:hover {
        outline-offset: 3px;
        transition: all 0.3s;
    }

    .social-media-button img {
        transition: all 0.3s;
    }

    .social-media-button:hover img {
        transform: scale(1.15);
    }

    .social-media-button:hover:nth-child(1) {
        background: var(--instagram);
    }

    .social-media-button:hover:nth-child(2) {
        background: var(--facebook);
    }

    .social-media-button:hover:nth-child(3) {
        background: var(--youtube);
    }

    .social-media-button:hover:nth-child(4) {
        background: var(--linkedin);
    }

    /* columns with links */

    .link-columns {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        flex-grow: 1;

        justify-content: space-between;


        /*border: var(--debug-2);*/
    }

    .link-columns > div {
        flex-grow: 1;
        display: flex;
        gap: 2rem;

        /*border: var(--debug-2);*/

    }

    section {
        /*border: var(--debug-2);*/
    }

    .link-columns > div > section {
        min-width: 8rem;
        width: 50%;

        /*border: var(--debug);*/
    }

    .link-columns ul {
        display: flex;
        gap: 1rem;
        list-style-type: none;
        padding: 0;
        margin: 0;
        flex-direction: column;
        /*font-weight: 600;*/

        /*border: var(--debug);*/
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
        /*margin-top: 8rem;*/
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
