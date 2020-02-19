<script>
  import Nav from "./Nav.svelte";
  import { getStore } from "../libs/stores";

  const title = "svelte spa";
  const store = getStore("app-router");
  $: route = $store.route;
</script>

<style>
  /* * {
    border: 1px solid;
  } */
  header {
    display: flex;
    justify-content: space-between;
    min-height: var(--size-1);
    padding: var(--gap-1);
  }
  @media (min-width: 640px) {
    header {
      padding: var(--gap-3);
    }
  }
  h1 {
    font-size: var(--text-lg);
    margin-left: var(--gap-2);
  }
  a {
    display: block;
  }
  a:hover {
    color: var(--theme-color);
    text-decoration: none;
  }
  .left {
    display: flex;
  }
  .logo {
    font-size: var(--text-4xl);
    color: var(--theme-color);
    font-weight: 200;
  }
  .logo,
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<header>
  <!-- left side: make a link home if not on home page -->
  {#if !route}
    <div class="left">
      <div class="logo">&#x02202;</div>
      <h1>{title}</h1>
    </div>
  {:else}
    <a href="#/" class="left">
      <div class="logo">&#x02202;</div>
      <h1>{title}</h1>
    </a>
  {/if}
  <!-- right-side: nav component -->
  <Nav />
</header>
