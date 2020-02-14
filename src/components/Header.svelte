<script>
  import Nav from "./Nav.svelte";
  import LogoSVG from "../svgs/LogoWhite.svelte";
  import { getStore } from "../libs/stores";

  const title = "weather app";

  const store = getStore("app-router");
  $: route = $store.route;
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--gap-3);
    min-height: var(--gap-7);
  }
  .left-side {
    display: flex;
  }
  h1 {
    font-size: var(--text-lg);
    margin-left: var(--gap-2);
  }
  .svg-wrapper,
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    display: block;
  }

  :global(.svg-wrapper svg) {
    width: var(--gap-6);
    height: var(--gap-6);
  }
  @media (max-width: 640px) {
    header {
      padding: var(--gap-2);
    }
  }
</style>

<header>
  {#if !route}
    <div class="left-side">
      <div class="svg-wrapper">
        <LogoSVG />
      </div>
      <h1>{title}</h1>
    </div>
  {:else}
    <a href="#/" class="left-side">
      <div class="svg-wrapper">
        <LogoSVG />
      </div>
      <h1>{title}</h1>
    </a>
  {/if}

  <Nav />
</header>
