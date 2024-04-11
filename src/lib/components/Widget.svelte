<script>
  import { onMount } from "svelte";

  let activeTab = "tab1"; // Default active tab

  /**
   * @param {string} linkId
   */
  function shiftTabs(linkId) {
    const index = parseInt(linkId.replace("tab", "")) - 1;
    const translateY = -index * 300;

    document.querySelectorAll(".tab-content").forEach((tabItem) => {
      // @ts-ignore
      tabItem.style.transform = `translateY(${translateY}px)`;
    });
  }

  /**
   * @param {{ currentTarget: { id: any; href: any; }; }} event
   */
  function handleTabClick(event) {
    const linkId = event.currentTarget.id;
    const hrefLinkClick = event.currentTarget.href;

    document.querySelectorAll(".tabs a").forEach((link) => {
      // @ts-ignore
      if (link.href === hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    activeTab = linkId;
    shiftTabs(linkId);
  }

  onMount(() => {
    // Handle proper selection for initial load
    const currentHash = window.location.hash;
    const activeLink = document.querySelector(`.tabs a[href="${currentHash}"]`);

    if (activeLink) {
      activeLink.classList.add("active");
      activeTab = activeLink.id;
      shiftTabs(activeTab);
    }
  });
</script>

<body>
  <div class="tabs-container">
    <ul class="tabs">
      <li>
        <a id="tab1" title="Analytics" href="#tab1" on:click={handleTabClick}>
          <!-- <div class="tabs-container">
    <ul class="tabs">
      <li>
        <a id="tab1" title="Analytics" href="#tab1"> -->
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 3v18h18"></path>
            <path d="M20 18v3"></path>
            <path d="M16 16v5"></path>
            <path d="M12 13v8"></path>
            <path d="M8 16v5"></path>
            <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"></path>
          </svg>
          Analytics
        </a>
      </li>
      <li>
        <a id="tab2" title="Reports" href="#tab2">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path d="M7 3v4h4"></path>
            <path d="M9 17l0 4"></path>
            <path d="M17 14l0 7"></path>
            <path d="M13 13l0 8"></path>
            <path d="M21 12l0 9"></path>
          </svg>
          Reports
        </a>
      </li>

      <li>
        <a id="tab3" title="Performance" href="#tab3">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            ></path>
            <path
              d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            ></path>
            <path
              d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
            ></path>
            <path d="M4 20l14 0"></path>
          </svg>
          Performance
        </a>
      </li>
      <li>
        <a id="tab4" title="Funds" href="#tab4">
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 21l18 0"></path>
            <path d="M3 10l18 0"></path>
            <path d="M5 6l7 -3l7 3"></path>
            <path d="M4 10l0 11"></path>
            <path d="M20 10l0 11"></path>
            <path d="M8 14l0 3"></path>
            <path d="M12 14l0 3"></path>
            <path d="M16 14l0 3"></path>
          </svg>
          Funds
        </a>
      </li>
    </ul>
    <div class="tab-content-wrapper">
      <article id="tab1-content" class="tab-content">
        <h2>Analytics</h2>
        <p>
          Investment analytics involves the use of data, statistical techniques,
          and financial models to evaluate and optimize investment decisions.
        </p>
        <img src="assets/analytics.png" alt="Analytics" />
      </article>
      <article id="tab2-content" class="tab-content">
        <h2>Reports</h2>
        <p>
          Investment reports provide detailed information about the status,
          performance, and other relevant aspects of an investment or portfolio.
        </p>
        <img src="assets/reports.png" alt="Reports" />
      </article>
      <article id="tab3-content" class="tab-content">
        <h2>Performance</h2>
        <p>
          Investment performance refers to the returns generated on an
          investment relative to the amount of money invested.
        </p>
        <img src="assets/performance.png" alt="Performance" />
      </article>
      <article id="tab4-content" class="tab-content">
        <h2>Funds</h2>
        <p>
          Investment funds are pooled collections of money from multiple
          investors that are managed collectively by professionals or on behalf
          of the investors.
        </p>
        <img src="assets/funds.png" alt="Funds" />
      </article>
    </div>
  </div>
</body>

<style>
  :root {
    --white: #fff;
    --gray: #363638;
    --gray-mid: #9d9d9d;
    --gray-dark: #3e3e3e;
    --gray-hover: #f7f7f7;
    --body-background: #1f192d;
    --primary: #8543cc;
    --primary-border: #42375d;
    --text: #cec0e0;
    --widget-background: #3a2d54;
  }

  body {
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
    background-color: var(--body-background);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .tabs-container {
    padding: 1rem;
    width: 100%;
    max-width: 30rem;
    min-width: 20rem;
    display: flex;
    margin: 0.675rem;
    border-radius: 1rem;
    background-color: var(--widget-background);
    border: 1px solid var(--primary-border);
  }

  .tab-content-wrapper {
    overflow-y: hidden;
    overflow-x: auto;
    height: 18.75rem;
    transition: all 0.45s ease-in-out;
    padding: 0 1rem;
  }

  .tab-content h2 {
    color: var(--white);
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .tab-content {
    font-size: 0.8rem;
    min-height: 18.75rem;
    min-width: 15rem;

    color: var(--white);
    overflow-x: auto;
    transition: all 0.45s ease-in-out;
  }

  .tab-content img {
    width: 100%;
    height: auto;
    margin-top: 1rem;
  }

  .tabs {
    position: relative;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--gray);
    list-style-type: none;
    padding-right: 1rem;
    gap: 0.5rem;
  }

  .tabs a {
    position: relative;
    display: flex;
    text-decoration: none;
    width: 100%;
    font-size: 0.875rem;
    font-weight: 600;
    text-align: left;
    border-radius: 0.5rem;
    justify-content: start;
    padding: 0.75rem;
    align-items: center;
    gap: 0.5rem;
    color: white;
    user-select: none;
    border: 1px solid transparent;
    transition: all 0.45s ease-in-out;
  }

  .tabs a img {
    height: 1.5rem;
    width: 1.5rem;
  }

  .tabs .active,
  .tabs a:hover {
    outline: none;
    background-color: var(--primary);
    border: 1px solid var(--primary-border);
  }

  .tabs a svg {
    stroke: var(--white);
  }

  .tabs .active svg {
    stroke: var(--white);
  }

  .tabs a:hover svg {
    stroke: var(--white);
  }
</style>
