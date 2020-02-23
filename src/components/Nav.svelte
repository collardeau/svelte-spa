<script>
  import { getContext } from "svelte";

  const store = getContext("app-router");

  const routes = [
    {
      name: "page 1",
      slug: "page-1"
    },
    {
      name: "about",
      slug: "about"
    }
  ];

  $: currentRoute = $store.route;
  $: active = route => route === currentRoute;
</script>

<nav>
  <ul>
    {#each routes as { name, slug }}
      <li class:active={active(slug)}>
        <a href={`#/${slug}`}>{name}</a>
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
