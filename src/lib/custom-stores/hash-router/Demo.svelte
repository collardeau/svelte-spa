<script>
  import { getContext } from "svelte";
  import Store from "../../components/lib/Store.svelte";
  // import createStore from "./createStore";

  // we already run the router for the app
  // so we get it from context:
  const store = getContext("app-router");
</script>

<p>createStore().start()</p>
<Store {store} />

<div>
  <p>This store reacts to the hash route (look at at the url).</p>
  <p>Try some internal links, and see the latest state:</p>
  <ul>
    <li>
      <a href="/#/stores/param1">#/stores/param1</a>
    </li>
    <li>
      <a href="/#/stores">#/stores</a>
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
  .warn {
    color: red;
  }
</style>
