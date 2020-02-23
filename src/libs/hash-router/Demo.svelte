<script>
  import { getContext } from "svelte";
  import Store from "../../demo/Store.svelte";

  // note that this app uses the hash router already
  // so we just get it from context
  const store = getContext("app-router");
</script>

<Store {store} />

<div>
  <p>This store reacts to the hash route (look at at the url).</p>
  <p>Try some internal links, and see the latest state:</p>
  <ul>
    <li>
      <a href="/#/stores-demo/param1">#/stores-demo/param1</a>
    </li>
    <li>
      <a href="/#/stores-demo">#/stores-demo</a>
    </li>
  </ul>
  {#if !$store.connected}
    <small class="warn">
      Note that the routing of the app is now broken!
      <br />
      You need to start the router again when you're done testing this store.
    </small>
  {/if}
</div>

<style>
  li {
    margin: var(--gap-2) 0;
  }
  .warn {
    color: red;
  }
</style>
