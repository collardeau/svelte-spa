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
    display: flex;
    flex-direction: column;
  }
  h1 {
    order: 2;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: var(--size-2);
  }
</style>

<header>
  <h1>{title}</h1>
  <nav>
    {#if route}
      <a href="#/">Home</a>
    {/if}
  </nav>
</header>
