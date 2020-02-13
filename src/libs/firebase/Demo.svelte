<script context="module">
  import { db } from "./firebase"; // see this file for setup
  import createStore from "./createStore";
  // can only *read* a firestore collection (for now) with `.get()`

  const dev = true;
  if (dev) {
    // you can mock firestore responses (and work offline):
    const mockCollection = [{ message: "mock-item-1", _id: "mock-id-1" }];
    createStore("my-data", { mock: mockCollection, latency: 1000 }).get();
  } else {
    // or use live firestore
    createStore("my-data", db.collection("my-data")).get();
  }
</script>

<script>
  import { getStore } from "../stores";

  const store = getStore("my-data");
  // $: console.log($store);
  $: loading = $store.loading;
  $: items = $store.data;
</script>

<style>
  li {
    margin-bottom: var(--gap-4);
  }
</style>

{#if loading}
  <div>loading...</div>
{:else}
  <ul>
    {#each items as item}
      <li>{item.message}</li>
    {/each}
  </ul>
{/if}
