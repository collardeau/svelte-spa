<script>
  import { currencies } from "./data";

  // console.log(currencies);
</script>

<div class="center">
  <div>
    <h3>Currencies</h3>
    <h5>Race to the Bottom</h5>
    <!-- <p>Since March 2020</p> -->
    <p>Change in the price of currencies in terms of gold</p>
  </div>
  <div>
    {#each currencies as currency}
      <div class="table">
        <span>{currency.name.toUpperCase()}</span>
        <span>{currency.change}%</span>
      </div>
    {/each}
  </div>
</div>

<style>
  .table {
    width: var(--size-5);
    display: flex;
    justify-content: space-between;
  }
</style>
