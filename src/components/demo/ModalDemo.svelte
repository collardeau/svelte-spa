<script context="module">
  import Modal from "../lib/Modal.svelte";
  import createBoolStore from "../../stores/bool";
  const bool = createBoolStore();
</script>

<Modal isOpen={$bool} close={bool.off}>
  <div>Hi! I'm a modal!</div>
</Modal>

<button on:click={bool.on}>open modal</button>

<style>
  div {
    padding: var(--gap-4);
  }
</style>
