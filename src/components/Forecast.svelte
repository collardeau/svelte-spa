<script>
  import Day from "./Day.svelte";
  export let city = "";
  export let country = "";
  export let forecasts = [];
</script>

<style>
  article {
    padding: var(--gap-3);
    margin-bottom: var(--gap-7);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    background-color: var(--white);
    display: flex;
    flex-direction: column;
  }
  header {
    display: flex;
  }
  h3 {
    margin-right: var(--gap-2);
    font-weight: 600;
  }
  .country {
    position: relative;
    top: 2px;
  }
  .daily-forecast {
    margin: var(--gap-6) 0;
    display: flex;
    justify-content: space-around;
  }
</style>

<article>
  <header>
    <h3>{city}</h3>
    <div class="country">{country}</div>
  </header>
  <section class="daily-forecast">
    {#each forecasts as forecast}
      <Day {...forecast} />
    {/each}
  </section>
</article>
