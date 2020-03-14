<script>
  import createStore from "./createStore";
  import Store from "../../components/Store.svelte";

  const store = createStore(["item 1", "item 2", "item 3"]);
</script>

<section>
  <h3>Cycle Store</h3>
  <div>
    <p>createStore(["item 1", "item 2", "item 3"])</p>
    <Store {store} />
  </div>
</section>

<style>
  section {
    display: grid;
    place-items: center;
    height: 100%;
    text-align: left;
  }
  h3 {
    margin-bottom: var(--gap-4);
  }
  p {
    margin: var(--gap-2);
  }
</style>
