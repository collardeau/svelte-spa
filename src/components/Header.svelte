<script>
  import Nav from "./Nav.svelte";
  import LogoSVG from "../svg/Logo.svelte";
  import { getStore } from "../libs/stores";

  const store = getStore("app-router");
  const title = "my new site";
  $: route = $store.route;
</script>

<div class="container">
  <header>
    <!-- left side: make a link home if not on home page -->
    {#if !route}
      <div class="left">
        <div class="logo">
          <LogoSVG />
        </div>
        <h1>{title}</h1>
      </div>
    {:else}
      <a href="#/" class="left">
        <div class="logo">
          <LogoSVG />
        </div>
        <h1>{title}</h1>
      </a>
    {/if}
    <!-- right-side: nav component -->
    <Nav />
  </header>
</div>

<style>
  .container {
    background-color: var(--white);
    border-bottom: 1px solid #ddd;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--gap-2) var(--gap-1);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  h1 {
    color: var(--black);
    margin: 0;
    padding: 0;
    font-size: var(--text-base);
  }
  a {
    display: block;
    color: var(--black);
  }
  a:hover {
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .logo {
    width: var(--gap-6);
    height: var(--gap-6);
    font-weight: 200;
    margin-right: var(--gap-1);
  }
  .logo,
  h1,
  :global(.logo svg) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
