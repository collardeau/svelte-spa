<script>
  import { getContext } from "svelte";
  // import Nav from "./Nav.svelte";
  import Bar from "../lib/Bar.svelte";
  import { navLinks } from "../../routes";

  const title = "Svelte Spa";

  const store = getContext("app-router");
  $: active = route => route === $store.route;
</script>

<header>
  <div />
  <Bar>
    <a href="#/" slot="left">
      <img src="logo.png" alt="logo" />
      <h1>{title}</h1>
    </a>
    <nav slot="right">
      {#each navLinks as link}
        <a href={`#/${link.slug}`} class:active={active(link.slug)}>
          {link.name}
        </a>
      {/each}
    </nav>
  </Bar>
  <div />
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr minmax(auto, var(--container-width)) 1fr;
    background-color: var(--white);
    padding: var(--gap-2) var(--gap-1);
    border-bottom: 1px solid #ddd;
  }
  nav {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, var(--size-2)));
    grid-gap: var(--gap-2);
    align-items: center;
    justify-content: end;
    text-align: center;
  }
  nav a {
    display: block;
    color: var(--black);
    font-size: var(--text-xs);
    font-weight: 200;
    text-transform: uppercase;
  }
  nav a:hover {
    color: var(--theme-color);
    text-decoration: none;
  }
  .active {
    color: var(--theme-color);
  }
  .active:hover {
    cursor: default;
    text-decoration: none;
  }
  h1 {
    color: var(--black);
    margin: 0;
    padding: 0;
    font-size: var(--text-base);
  }
  a {
    display: grid;
    grid-template-columns: var(--gap-7) max-content;
    align-items: center;
    grid-gap: var(--gap-2);
    color: var(--black);
  }
  img {
    width: 100%;
  }
</style>
