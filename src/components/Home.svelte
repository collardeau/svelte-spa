<script>
  import { works } from "../data";
  import SocialMedia from "./SocialMedia.svelte";
</script>

<div class="page">
  <section>
    <h3>works</h3>
    <ul>
      {#each works as { href, title }}
        <li>
          {title} -
          <a {href}>link</a>
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h3>social media</h3>
    <SocialMedia />
  </section>
  <section>
    <h3>toolbox</h3>
    <p>
      demo the
      <a href="#/kitchen-sink">kitchen sink</a>
    </p>
  </section>

</div>

<style>
  .page {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 1.5;
  }
  section {
    margin-bottom: var(--gap-8);
  }
  h3 {
    margin-bottom: var(--gap-3);
  }
  li {
    margin-bottom: var(--gap-4);
  }
  p {
    margin-bottom: var(--gap-5);
  }
</style>
