<script context="module">
  import createCycleStore from "../../stores/cycle";
  const videos = ["AdNJ3fydeao", "BzX4aTRPzno", "ogXETl_I0Dg"]; // rich harris talks
  const videoStore = createCycleStore(videos);
</script>

<script>
  import YouTube from "../lib/YouTube.svelte";

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

<YouTube bind:player id="svelte-video" {videoId} on:change={onPlayerChange} />
<div>
  <button on:click={onPlay}>play</button>
  <button on:click={onStop}>stop</button>
  <button on:click={playNext}>next</button>
</div>
