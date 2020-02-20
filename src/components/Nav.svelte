<script>
  import { getStore } from "../libs/stores";
  const store = getStore("app-router");
  $: currentRoute = $store.route;

  const routes = [
    {
      href: "#/blog",
      name: "Blog",
      route: "blog"
    },
    {
      href: "#/about",
      name: "About",
      route: "about"
    }
  ];

  $: active = route => route === currentRoute;
</script>

<nav>
  <ul>
    {#each routes as { href, name, route }}
      <li class:active={active(route)}>
        <a {href}>{name}</a>
      </li>
    {/each}

  </ul>
</nav>

<style>
  ul {
    display: flex;
  }
  li {
    margin-left: var(--gap-5);
  }
  a {
    display: block;
    color: var(--black);
    padding: var(--gap-2);
    border-bottom: 0.125rem solid transparent;
  }
  a:hover {
    text-decoration: none;
    border-bottom: 0.125rem solid var(--theme-color);
  }
  .active a {
    border-bottom: 0.125rem solid var(--theme-color);
    /* color: #999; */
    opacity: 0.6;
  }
  .active a:hover {
    border-bottom: 0.125rem solid var(--theme-color);
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
