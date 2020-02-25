<script>
  import { getContext } from "svelte";
  import Store from "../lib/Store.svelte";
  import createBoolStore from "../../stores/bool";
  import createCycleStore from "../../stores/cycle";
  // import createRouterStore from "../../stores/hash-router";
  import createFetchStore from "../../stores/fetch";

  const bool = createBoolStore();
  const cycle = createCycleStore(["item 1", "item 2", "item 3"]);
  const router = getContext("app-router"); // we already have a router for the app
  const fetch = createFetchStore(
    "https://api.github.com/repos/sveltejs/svelte",
    ({ homepage, stargazers_count }) => ({
      homepage,
      stargazers_count
    })
  );
</script>

<div class="page stores-page">
  <h3>Store Creators</h3>
  <section>
    <h5>Boolean</h5>
    <p>createStore()</p>
    <Store store={bool} />
  </section>
  <section>
    <h5>Cycle</h5>
    <p>createStore(["item 1", "item 2", "item 3"])</p>
    <Store store={cycle} />
  </section>
  <section>
    <h5>Fetch</h5>
    <p>createStore("https://api.github.com/repos/sveltejs/svelte")</p>
    <Store store={fetch} />
  </section>
  <section>
    <h5>Hash Router</h5>
    <p>createStore().start()</p>
    <Store store={router} />
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
      {#if !$router.connected}
        <small class="warn">
          Note that the routing of the app is now broken!
          <br />
          You need to start the router again when you're done testing this
          store.
        </small>
      {/if}
    </div>
  </section>

</div>

<style>
  .stores-page {
    width: var(--size-8);
  }
  section {
    margin-bottom: var(--gap-6);
    padding-bottom: var(--gap-8);
    border-bottom: 0.01rem solid var(--white);
  }
  h3 {
    margin: var(--gap-5) 0;
    text-align: center;
    font-size: var(--text-2xl);
  }
  h5 {
    margin-bottom: var(--gap-4);
  }
  p {
    margin-bottom: var(--gap-3);
  }
  .warn {
    color: red;
  }
</style>
