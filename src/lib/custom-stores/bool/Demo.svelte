<script>
  import createStore from "./createStore";
  import Store from "../../components/Store.svelte";

  const bool = createStore();
</script>

<section>
  <h3>
    Boolean
    <br />
    Store
  </h3>
  <Store store={bool} />
</section>

<style>
  section {
    display: grid;
    height: 100%;
    place-items: center;
  }
  h3 {
    text-align: center;
  }
</style>
