<script context="module">
  import createStore from "./createStore";

  const name = "my-modal";
  createStore(name);
</script>

<script>
  import Modal from "./Modal.svelte";
  // open modal from any component:
  import { getStore } from "../stores";
  const openModal = getStore("my-modal").open;
</script>

<div class="container">
  <Modal {name}>
    <p>Hello there</p>
  </Modal>
</div>

<button on:click={openModal}>Open Modal</button>

<style>
  .container {
    --modal-width: 60%;
  }
</style>
