<script>
  import Nav from "./Nav.svelte";
  import LogoSVG from "../svgs/LogoWhite.svelte";
  import { getStore } from "../libs/stores";

  const appTitle = "weather app";

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
  .svg-wrapper,
  h1 {
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
  <Nav />
</header>
