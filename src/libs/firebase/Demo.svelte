<script context="module">
  import { db } from "./firebase"; // see this file for setup
  import createStore from "./createStore";

  createStore("my-data", db.collection("my-data")).get();
  // can only *read* a firestore collection (for now) with `.get()`

  // you can also mock firestore responses (and work offline):
  // const mockCollection = [{ message: "mock-item-1", _id: "mock-id-1" }];
  // createStore("my-data", { mock: mockCollection }).get();
</script>

<script>
  import { getStore } from "../stores";

  const store = getStore("my-data");
  $: loading = $store.loading;
  $: items = $store.data;
</script>

<style>
  li {
    margin-bottom: 1rem;
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
