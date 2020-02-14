<script>
  export let city = "";
  export let country = "";
  export let countryCode = "";

  const src = `img/flags/${countryCode}.svg`;
  const alt = `${country} flag`;
</script>

<style>
  article {
    background-color: var(--white);
    padding: var(--gap-3);
    margin-bottom: var(--gap-7);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  }
  header {
    display: flex;
  }
  h3 {
    margin-right: var(--gap-2);
    min-width: var(--size-4);
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
    padding: 2rem;
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
  <section class="daily-forecast" />

</article>
