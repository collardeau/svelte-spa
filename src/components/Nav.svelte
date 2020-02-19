<script>
  import { getStore } from "../libs/stores";
  const store = getStore("app-router");
  $: route = $store.route;
</script>

<nav>
  <ul>
    {#if route !== 'about'}
      <li>
        <a href="#/about">About</a>
      </li>
    {/if}
  </ul>
</nav>

<style>
  ul {
    display: flex;
  }
  li {
    margin-left: var(--gap-2);
  }
  a {
    display: block;
    color: var(--black);
    padding: var(--gap-2);
  }
  a,
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
