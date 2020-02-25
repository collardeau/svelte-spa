<script context="module">
  let isReady = false;
  function createYTPlayer(id, opts) {
    return new YT.Player(id, {
      height: "390",
      width: "640",
      ...opts
    });
  }
</script>

<script>
  import { createEventDispatcher, onMount } from "svelte";

  export let videoId = "";
  export let id = "";
  export let player = {};

  const dispatch = createEventDispatcher();

  const createPlayer = () => {
    player = createYTPlayer(id, {
      videoId,
      events: {
        onStateChange: e => {
          dispatch("change", e);
        }
      }
    });
  };

  onMount(() => {
    if (isReady) createPlayer();
    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
      isReady = true;
    };
  });
</script>

<svelte:head>
  <script src="https://www.youtube.com/iframe_api">

  </script>
</svelte:head>

<div {id} />
