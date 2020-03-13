<script>
  import { getContext } from "svelte";
  import Bar from "../lib/Bar.svelte";

  const title = "Svelte Spa";

  const store = getContext("intersection-observer");
  $: active = slug => {
    if (!$store.intersecting.length) return false;
    const first = $store.intersecting[0];
    return first.startsWith(slug);
  };

  const links = [
    {
      slug: "stores",
      txt: "stores"
    },
    {
      slug: "components",
      txt: "comps"
    },
    {
      slug: "about",
      txt: "about"
    }
  ];
</script>

<Bar>

  <a href="/" slot="left" class="left">
    <img src="logo.png" alt="logo" />
    <h1>{title}</h1>
  </a>
  <nav slot="right" class="right">
    {#each links as { slug, txt }}
      <a href={`#${slug}`} class:active={active(slug)}>{txt}</a>
    {/each}
  </nav>
</Bar>

<style>
  .left,
  .right {
    display: grid;
    grid-gap: var(--gap-2);
    align-items: center;
  }
  .left {
    grid-template-columns: var(--gap-7) auto;
  }
  .right {
    grid-template-columns: repeat(auto-fit, var(--size-2));
    justify-content: end;
    text-align: center;
  }
  a {
    display: block;
    text-decoration: none;
    color: var(--black);
  }
  .right a {
    font-size: var(--text-xs);
    font-weight: 200;
    text-transform: uppercase;
  }
  .right a:hover {
    color: var(--theme-color);
  }
  .right .active {
    color: var(--theme-color);
  }
  .right .active:hover {
    cursor: default;
    text-decoration: none;
  }
  .left h1 {
    color: var(--black);
    margin: 0;
    padding: 0;
    font-size: var(--text-base);
  }

  .left img {
    width: 100%;
    display: block;
  }
</style>
