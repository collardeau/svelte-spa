<script context="module">
  import Modal from "../Modal.svelte";
  import createBoolStore from "../../custom-stores/bool/createStore";
  const bool = createBoolStore();
</script>

<section>
  <h3>Modal Component</h3>
  <button on:click={bool.on}>open modal</button>
</section>

<Modal isOpen={$bool} close={bool.off}>
  <div class="modal">Hi! I'm a modal!</div>
</Modal>

<style>
  section {
    display: grid;
    height: 100%;
    place-items: center;
  }
  .modal {
    display: grid;
    height: 100%;
    place-items: center;
    padding: var(--gap-2);
  }
</style>
