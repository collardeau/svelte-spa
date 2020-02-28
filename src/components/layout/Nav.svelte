<script>
  import { getContext } from "svelte";

  const store = getContext("app-router");

  const links = [
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
    {#each links as { name, slug }}
      <li class:active={active(slug)}>
        <a href={`#/${slug}`}>{name}</a>
      </li>
    {/each}

  </ul>
</nav>

<style>
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, var(--size-2)));
    grid-auto-rows: var(--gap-6);
    align-items: center;
    justify-content: end;
    text-align: center;
    grid-gap: var(--gap-2);
  }
  a {
    display: block;
    color: var(--black);
    padding: var(--gap-2) 0;
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
</style>
