<script>
  import Nav from "./Nav.svelte";
  import LogoSVG from "../svg/Logo.svelte";
  import { getStore } from "../libs/stores";

  const store = getStore("app-router");
  const title = "tonton.dev";
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
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--gap-1);
    width: var(--container-width);
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    header {
      padding: var(--gap-2);
    }
  }
  h1 {
    color: var(--black);
    margin: 0;
    padding: 0;
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
  }
  .logo {
    width: var(--size-1);
    height: var(--size-1);
    font-weight: 200;
    margin-right: var(--gap-1);
    /* color: var(--theme-color); */
  }
  .logo,
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
