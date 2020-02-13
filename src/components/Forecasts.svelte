<script context="module">
  import createStore from "../libs/firebase/createStore";

  const mock = [
    { city: "Lisbon", country: "Portugal" },
    { city: "Athens", country: "Greece" }
  ];
  createStore("forecasts", { mock }).get();
</script>

<script>
  import Forecast from "./Forecast.svelte";
  import { getStore } from "../libs/stores";

  const store = getStore("forecasts");
  $: loading = $store.loading;
  $: items = $store.data;
</script>

<style>
  section {
    height: 33vh;
    background-color: var(--white);
    color: var(--black);
    margin-top: var(--gap-8);
  }
</style>

<section>
  <h5>The Best Forecasts in Europe</h5>
  {#if loading}
    <div>loading...</div>
  {:else}
    <ul>
      {#each items as item}
        <Forecast {...item} />
      {/each}
    </ul>
  {/if}
</section>
