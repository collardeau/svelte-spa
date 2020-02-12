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
    display: flex;
    flex-direction: column; /* so child can flex:1 */
  }
  header {
    text-align: center;
  }
  nav {
    min-height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  footer {
    text-align: center;
    padding: var(--gap-4);
    background-color: #ccc;
    font-size: 0.8rem;
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
