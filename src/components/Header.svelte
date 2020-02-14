<script>
  import LogoSVG from "../svgs/LogoWhite.svelte";
  import { getStore } from "../libs/stores";

  const appTitle = "kairos";

  const store = getStore("app-router");
  $: route = $store.route;
  $: title = route === "kitchen-sink" ? "Kitchen Sink" : appTitle;

  const goHome = () => {
    if (route) {
      window.location.hash = "/";
    }
  };
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
  li {
    width: var(--size-3);
    height: var(--size-1);
    text-align: center;
  }
  a {
    display: block;
    height: 100%;
  }
  .svg-wrapper,
  a,
  h1,
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
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
  <div class="left-side" on:click={goHome}>
    <div class="svg-wrapper">
      <LogoSVG />
    </div>
    <h1>{title}</h1>
  </div>
  <nav>
    <ul>
      {#if !route}
        <li>
          <a href="#/about">About</a>
        </li>
      {/if}
    </ul>
  </nav>
</header>
