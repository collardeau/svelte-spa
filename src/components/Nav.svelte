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
    border-bottom: 0.125rem solid transparent;
    text-transform: uppercase;
    font-weight: 200;
    font-size: var(--text-xs);
  }
  a:hover {
    text-decoration: none;
    border-bottom: 0.125rem solid var(--theme-color);
  }
  .active a {
    opacity: 0.8;
    color: var(--theme-color);
  }
  .active a:hover {
    border-bottom: 0.125rem solid transparent;
    text-decoration: none;
    cursor: default;
  }
  a,
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
