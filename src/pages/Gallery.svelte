<script>
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
      src: "https://placekitten.com/g/300/200?image=3"
    },
    {
      id: "kitten-4",
      src: "https://placekitten.com/g/200/200?image=7"
    },
    {
      id: "kitten-5",
      src: "https://placekitten.com/g/200/200?image=5"
    }
  ];
</script>

<section>
  <div id="intro" class="cell">
    <div />
    <h3>Kittens</h3>
    <h5>A Gallery</h5>
    <div />
  </div>
  {#each images as { src, id, color }}
    <div class="cell" style={`grid-area: ${id}; background: ${color}`}>
      {#if src}
        <img {id} {src} alt="abstract image" />
      {/if}
    </div>
  {/each}
</section>

<style>
  section {
    display: grid;
    height: 100%;
    width: 100%;
    grid-gap: var(--gap-2);
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "kitten-1 intro     kitten-5"
      "kitten-1 kitten-4  kitten-2"
      "kitten-3 kitten-3  kitten-2";
  }

  .cell {
    display: grid;
  }
  #intro {
    grid-area: intro;
    display: grid;
    height: 100%;
    place-items: center;
  }
  h3,
  h5 {
    color: var(--black);
    font-weight: 400;
  }
  h5 {
    font-size: 1rem;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
