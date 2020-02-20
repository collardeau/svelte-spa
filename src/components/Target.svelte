<script>
  import ProjectPage from "./ProjectPage.svelte";
  import Swiper from "../libs/swiper/Swiper.svelte";
  import { targetLinks } from "../data";

  const alt = "app screenshot";

  const images = [1, 2, 5, 6, 4, 3].map(
    x => `img/projects/studio-connect-${x}.jpg`
  );
</script>

<ProjectPage>
  <h3>Target</h3>
  <section>
    <p>
      I was the
      <strong>lead front-end developer</strong>
      for the app
      <a href="https://studioconnect.live">Studio Connect</a>
      designed by the innovations team at Target. Starting from the conception
      of the project, I was on the team for 18 months.
    </p>
  </section>
  <section class="slideshow">
    <h5>Slideshow</h5>
    <Swiper>
      {#each images as image}
        <div class="swiper-slide">
          <img src={image} {alt} />
        </div>
      {/each}
    </Swiper>
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
    <p>Ionic/Angular - Firebase - React - Redux - Redux-rxjs</p>
  </section>
</ProjectPage>

<style>
  h3 {
    font-size: var(--text-3xl);
    color: #e80018; /* target red */
  }
  h5 {
    margin-bottom: var(--gap-4);
    font-size: var(--text-base);
    color: #e80018;
  }
  section {
    padding: var(--gap-4) 0;
  }
  p {
    text-align: justify;
  }
  ul {
    text-align: left;
  }
  li {
    margin-bottom: var(--gap-4);
  }
  .slideshow {
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
