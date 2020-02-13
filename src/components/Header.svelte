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
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: var(--size-2);
  }
  h1 {
    font-size: var(--text-5xl);
  }
  @media (min-width: 640px) {
    h1 {
      font-size: var(--text-6xl);
    }
  }
</style>

<header>
  <nav>
    {#if route}
      <a href="#/">Home</a>
    {/if}
    {#if !route}
      <a href="#/kitchen-sink">Kitchen Sink</a>
    {/if}
  </nav>
  <h1>{title}</h1>
</header>
