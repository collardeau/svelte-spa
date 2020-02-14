<script>
  import Day from "./Day.svelte";
  export let city = "";
  export let country = "";
  export let countryCode = "";
  export let forecasts = [];

  const src = `img/flags/${countryCode}.svg`;
  const alt = `${country} flag`;
</script>

<style>
  article {
    min-width: var(--size-8);
    padding: var(--gap-3);
    margin-bottom: var(--gap-7);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    background-color: var(--white);
  }
  header {
    display: flex;
  }
  h3 {
    margin-right: var(--gap-2);
    min-width: var(--size-5);
    font-weight: 600;
  }
  img {
    margin-right: var(--gap-1);
  }
  .country {
    display: flex;
  }
  .country div {
    position: relative;
    top: 2px;
  }
  .daily-forecast {
    margin: var(--gap-6) 0;
    display: flex;
    justify-content: space-between;
  }
  .more {
    /* display: flex; */
    display: none;
    justify-content: space-between;
    margin-top: var(--gap-6);
  }
  button {
    background-color: var(--sky-blue);
    color: var(--white);
    border: none;
  }
</style>

<article>
  <header>
    <h3>{city}</h3>
    <div class="country">
      <img {src} {alt} />
      <div>{country}</div>
    </div>
  </header>
  <section class="daily-forecast">
    {#each forecasts as forecast}
      <Day {...forecast} />
    {/each}
  </section>
  <div class="more">
    <div class="left" />
    <div class="right">
      <button>Action</button>
    </div>
  </div>

</article>
