<script>
  import { getStore } from "../libs/stores";

  const store = getStore("app-router");
  $: route = $store.route;
</script>

<style>
  li {
    width: var(--size-3);
    height: var(--size-1);
    text-align: center;
  }
  a {
    display: block;
    height: 100%;
  }
  a,
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>

<nav>
  <ul>
    {#if !route}
      <li>
        <a href="#/about">About</a>
      </li>
    {/if}
  </ul>
</nav>
