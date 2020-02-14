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
  li {
    width: var(--size-3);
    height: var(--size-1);
    margin: 0 auto;
    text-align: center;
  }
  a {
    display: block;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<header>
  <h1>{title}</h1>
  <nav>
    <ul>
      {#if route}
        <li>
          <a href="#/">Home</a>
        </li>
      {/if}
      {#if !route}
        <li>
          <a href="#/about">About</a>
        </li>
      {/if}
    </ul>
  </nav>
</header>
