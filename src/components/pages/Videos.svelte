<script>
  import { onMount } from "svelte";
  import Player from "../Player.svelte";

  // let vidIds = ["BOYdZ0GyQFQ", "Bjnu_bnJ5Po"];
</script>

<div class="page videos-page">
  <section>
    <h3>YouTube Videos</h3>
  </section>
  <Player />
</div>

<style>
  .videos-page {
    text-align: center;
    justify-content: space-evenly;
  }
</style>
