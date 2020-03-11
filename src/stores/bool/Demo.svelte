<script>
  import createStore from "./createStore";
  import Store from "../../components/lib/Store.svelte";

  const bool = createStore();
</script>

<div class="container">
  <h3>
    Boolean
    <br />
    Store
  </h3>
  <!-- <p>createStore()</p> -->
  <Store store={bool} />
</div>

<style>
  .container {
    display: grid;
    place-items: center;
    height: 100%;
    text-align: center;
  }
  h3 {
    margin-bottom: var(--gap-4);
  }
</style>
