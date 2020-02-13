<script>
  import { getStore } from "../libs/stores";

  const appTitle = "Svelte Spa";

  const store = getStore("app-router");
  $: route = $store.route;
  $: title = route === "kitchen-sink" ? "Kitchen Sink" : appTitle;
</script>

<style>
  header {
    text-align: center;
    padding: var(--gap-3);
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: var(--text-5xl);
    margin: var(--gap-7) 0;
    order: 2;
  }
  @media (min-width: 640px) {
    h1 {
      font-size: var(--text-6xl);
    }
  }
</style>

<header>
  <h1>{title}</h1>
  <nav>
    {#if route}
      <a href="#/">Home</a>
    {/if}
    {#if !route}
      <a href="#/about">About</a>
    {/if}
  </nav>
</header>
