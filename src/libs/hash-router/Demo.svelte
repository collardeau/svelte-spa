<script>
  import { getContext } from "svelte";
  import Store from "../../demo/Store.svelte";

  // note that this app uses the hash router already
  // so we just get it from context
  const store = getContext("app-router");
</script>

<Store {store} />

<div>
  try some internal links:
  <br />
  <a href="#/kitchen-sink">#kitchen-sink</a>
  <br />
  <a href="#/kitchen-sink/param1">#kitchen-sink/param1</a>
  <br />
  {#if !$store.on}
    <small class="warn">Note that the routing of the app is broken!</small>
  {/if}
</div>

<style>
  .warn {
    color: red;
  }
</style>
