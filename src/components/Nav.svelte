<script>
  import { getStore } from "../libs/stores";

  const store = getStore("app-router");
  const routes = ["blog", "about"];

  $: currentRoute = $store.route;
  $: active = route => route === currentRoute;
</script>

<nav>
  <ul>
    {#each routes as route}
      <li class:active={active(route)}>
        <a href={`#/${route}`}>{route}</a>
      </li>
    {/each}

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
    font-size: var(--text-xs);
    font-weight: 200;
    text-transform: uppercase;
  }
  a:hover {
    color: var(--theme-color);
    text-decoration: none;
  }
  .active a {
    color: var(--theme-color);
  }
  .active a:hover {
    cursor: default;
    text-decoration: none;
  }
  a,
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
