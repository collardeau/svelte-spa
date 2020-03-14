<script context="module">
  import createCycleStore from "../../custom-stores/cycle/createStore";
  const videos = ["AdNJ3fydeao", "BzX4aTRPzno", "ogXETl_I0Dg"]; // rich harris talks
  const videoStore = createCycleStore(videos);
</script>

<script>
  import YouTube from "../YouTube.svelte";

  let player;
  const onPlay = () => player.playVideo();
  const onStop = () => player.pauseVideo();

  const playNext = () => {
    videoStore.next();
    player.loadVideoById($videoStore.item);
  };

  const onPlayerChange = ({ detail }) => {
    if (detail.data === 0) {
      // video is over
      playNext();
    }
  };

  const videoId = $videoStore.item;
</script>

<section>
  <h3>YouTube Embed</h3>
  <YouTube bind:player id="svelte-video" {videoId} on:change={onPlayerChange} />
  <div>
    <button on:click={onPlay}>play</button>
    <button on:click={onStop}>stop</button>
    <button on:click={playNext}>next</button>
  </div>
</section>

<style>
  section {
    display: grid;
    height: 100%;
    width: 90%;
    max-width: var(--size-8);
    margin: 0 auto;
    text-align: center;
    place-items: center;
  }
</style>
