<script>
  import Modal from "./Modal.svelte";
  import createBoolStore from "../libs/Bool/createStore";
  const bool = createBoolStore();
</script>

<div class="page comps-demo">
  <h3>Components</h3>
  <section>
    <h5>Modal</h5>
    <Modal isOpen={$bool} close={bool.off}>Hi! I'm a modal!</Modal>
    <button on:click={bool.on}>open modal</button>
  </section>
</div>

<style>
  .comps-demo {
    text-align: center;
  }
  h3 {
    margin: var(--gap-5) 0;
    font-size: var(--text-2xl);
  }
  h5 {
    margin-bottom: var(--gap-4);
  }
</style>
