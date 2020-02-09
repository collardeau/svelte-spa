<script context="module">
  import createStore from "./createStore";

  const name = "my-modal";
  createStore(name);
</script>

<script>
  import Modal from "./modal.svelte";
  import { getStore } from "../stores";

  const openModal = getStore("my-modal").open;
</script>

<Modal {name}>
  <p>Hello there</p>
</Modal>

<button on:click={openModal}>Open Modal</button>
