<script>
  export let route = "home";
  $: title =
    route === "home"
      ? "Svelte Spa"
      : route === "kitchen-sink"
      ? "Kitchen Sink"
      : "";
</script>

<style>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 var(--gap-2);
    flex: 1;
    display: flex; /* so slot can flex:1 */
    flex-direction: column;
  }
  header {
    text-align: center;
  }
  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: var(--size-2);
  }
  footer {
    text-align: center;
    padding: var(--gap-4);
    background-color: var(--grey);
    font-size: var(--text-sm);
  }
</style>

<div class="layout">
  <header>
    <nav>
      {#if route !== 'home'}
        <a href="#/">Home</a>
      {/if}
    </nav>
    <h1>{title}</h1>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    View the github repo:
    <a href="https://github.com/collardeau/svelte-spa">
      https://github.com/collardeau/svelte-spa
    </a>
  </footer>
</div>
