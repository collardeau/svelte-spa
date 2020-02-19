<script>
  import { getStore } from "../libs/stores";
  const store = getStore("app-router");
  $: route = $store.route;
</script>

<style>
  ul {
    display: flex;
  }
  li {
    margin-left: var(--gap-2);
  }
  a {
    display: block;
    padding: var(--gap-2);
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
