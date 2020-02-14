<script context="module">
  import createStore from "../libs/firebase/createStore";

  const mock = [
    { city: "Lisbon", country: "Portugal", countryCode: "PT" },
    { city: "Athens", country: "Greece", countryCode: "GR" },
    { city: "Valencia", country: "Spain", countryCode: "ES" }
  ];
  createStore("forecasts", { mock, latency: 200 }).get();
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
    color: var(--black);
    margin-top: var(--gap-6);
  }
  h5 {
    padding: var(--gap-4) 0;
  }
</style>

<section>
  <h5>The Best Forecasts in Europe</h5>
  {#if loading}
    <div>loading...</div>
  {:else}
    <ul>
      <li>
        {#each items as item}
          <Forecast {...item} />
        {/each}
      </li>
    </ul>
  {/if}
</section>
