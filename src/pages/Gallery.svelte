<script>
  import Modal from "../lib/components/Modal.svelte";

  export let images = [
    {
      id: "kitten-1",
      src: "https://placekitten.com/g/200/300?image=3"
    },
    {
      id: "kitten-2",
      src: "https://placekitten.com/g/200/400?image=2"
    },
    {
      id: "kitten-3",
      src: "https://placekitten.com/g/300/200?image=6"
    },
    {
      id: "kitten-4",
      src: "https://placekitten.com/g/200/200?image=8"
    },
    {
      id: "kitten-5",
      src: "https://placekitten.com/g/200/200?image=5"
    }
  ];

  let open = false; // modal
  let clicked = {};

  const onImgClick = index => {
    clicked = images[index];
    open = true;
  };

  const closeModal = () => (open = false);
</script>

<section>
  <div id="intro" class="cell">
    <h3>
      Grid
      <br />
      Gallery
    </h3>
  </div>
  {#each images as { src, id, color }, i}
    <div
      class="cell"
      on:click={() => onImgClick(i)}
      style={`grid-area: ${id};`}>
      {#if src}
        <img {id} {src} alt="kitten" />
      {/if}
    </div>
  {/each}
</section>

<Modal isOpen={open} close={closeModal}>
  <div class="modal">
    <img src={clicked.src} alt="kitten" />
  </div>
</Modal>

<style>
  section {
    padding: var(--gap-1);
    display: grid;
    height: 100%;
    width: 100%;
    grid-gap: var(--gap-1);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "kitten-1 intro     kitten-5"
      "kitten-1 kitten-4  kitten-2"
      "kitten-3 kitten-3  kitten-2";
  }

  @media (min-width: 640px) {
    section {
      padding: var(--gap-2);
      grid-gap: var(--gap-2);
    }
  }

  .cell {
    display: grid;
  }
  #intro {
    grid-area: intro;
    display: grid;
    height: 100%;
    place-items: center;
    text-align: center;
  }
  h3 {
    color: var(--black);
    font-size: 1rem;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
