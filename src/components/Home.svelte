<script>
  import { works, projects, blogs } from "../data";
  import Intro from "./Intro.svelte";
</script>

<div class="page home-page">
  <section>
    <Intro />
  </section>
  <section>
    <h3>Works</h3>
    <ul>
      {#each works as item}
        <li>
          <a href={item.href}>{item.title}</a>
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h3>Projects</h3>
    <ul>
      {#each projects as item}
        <li>
          <a href={item.href}>{item.title}</a>
        </li>
      {/each}
    </ul>
  </section>
</div>

<style>
  .home-page {
    text-align: center;
  }
  section {
    margin: var(--gap-5) 0;
  }
  li {
    margin-bottom: var(--gap-3);
  }
  :global(.home-page ul a) {
    color: var(--black);
    padding-bottom: 0.125rem;
    text-decoration: none;
    border-bottom: 1px dashed;
  }
</style>
