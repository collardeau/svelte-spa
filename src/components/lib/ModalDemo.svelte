<script context="module">
  import Modal from "../lib/Modal.svelte";
  import createBoolStore from "../../stores/bool/createStore";
  const bool = createBoolStore();
</script>

<div class="container">
  <h3>Modal Component</h3>
  <button on:click={bool.on}>open modal</button>
</div>

<Modal isOpen={$bool} close={bool.off}>
  <div class="modal">Hi! I'm a modal!</div>
</Modal>

<style>
  .container {
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
