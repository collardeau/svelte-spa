<script>
  import Slideshow from "./Slideshow.svelte";
  import Swiper from "../libs/swiper/Swiper.svelte";
  import { targetLinks } from "../data";

  const images = [1, 2, 5, 6, 4, 3].map(
    x => `img/projects/studio-connect-${x}.jpg`
  );
</script>

<div class="page target-page">
  <h3>For Target</h3>
  <section>
    <p class="justify">
      I was the
      <strong>lead front-end developer</strong>
      for the iOS app
      <a href="https://studioconnect.live">Studio Connect</a>
      designed by the innovations team at Target. Starting from the conception
      of the project, I was on the team for 15 months and implemented the bulk
      of the UI features during that time.
    </p>
  </section>
  <section>
    <h5>Slideshow</h5>
    <Slideshow {images} />
  </section>
  <section>
    <h5>Links</h5>
    <ul>
      {#each targetLinks as { href, text, source }}
        <li>
          "{text}"
          <small>
            <a {href}>{source}</a>
          </small>
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h5>Stack</h5>
    <p>Ionic, React, RxJS, Firebase</p>
  </section>
</div>

<style>
  .target-page {
    text-align: center;
    margin-top: var(--gap-4);
    max-width: var(--size-8);
  }
  h3 {
    font-size: var(--text-2xl);
    /* color: #e80018; target red */
  }
  h5 {
    font-size: var(--text-base);
  }
  section {
    margin-bottom: var(--gap-5);
  }
  p {
    text-align: center;
  }
  .justify {
    text-align: justify;
  }
  li {
    margin-bottom: var(--gap-4);
    /* text-align: left; */
  }
</style>
