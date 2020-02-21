<script>
  import Swiper from "../libs/swiper/Swiper.svelte";

  export let images = [];
  export let alt = "site screenshot";
</script>

<div class="container">
  <Swiper>
    {#each images as image}
      <div class="swiper-slide">
        <img src={image} {alt} />
      </div>
    {/each}
  </Swiper>
</div>

<style>
  .container {
    --swiper-theme-color: var(--white);
    max-width: 350px;
    margin: 0 auto;
  }
  .swiper-slide {
    display: flex;
    justify-content: center;
  }
  .swiper-slide img {
    width: 100%;
  }
</style>
