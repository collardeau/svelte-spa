<script>
  import Swiper from "./Swiper.svelte";

  // in order to use this lib, you need to install swipper
  // npm i swiper@5.3.1
  // full api at https://swiperjs.com/api/

  const params = {
    loop: true,
    on: {
      init: () => {
        // console.log("swiper initialized");
      }
    }
  };
</script>

<style>
  .swiper-slide {
    height: 7rem;
  }
  .slide-1 {
    background-color: green;
  }
  .slide-2 {
    background-color: red;
  }
</style>

<Swiper {params}>
  <!-- each slide requires the class "swiper-slide" -->
  <div class="swiper-slide slide-1">Slide 1</div>
  <div class="swiper-slide slide-2">Slide 2</div>
</Swiper>
