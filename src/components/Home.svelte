<script>
  import { works, projects, blogs } from "../data";
  import Intro from "./Intro.svelte";
</script>

<div class="page">
  <section>
    <Intro />
  </section>
  <section>
    <h3>works</h3>
    <ul>
      {#each works as { href, title }}
        <li>
          <a {href}>{title}</a>
        </li>
      {/each}
    </ul>
  </section>
  <section>
    <h3>projects</h3>
    <ul>
      {#each projects as { href, title }}
        <li>
          <a {href}>{title}</a>
        </li>
      {/each}
    </ul>
  </section>
  <!-- <section>
    <h3>blogs</h3>
    <ul>
      {#each blogs as { href, title }}
        <li>
          <a {href}>{title}</a>
        </li>
      {/each}
    </ul>
  </section> -->
</div>

<style>
  .page {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 1.4;
  }
  section {
    margin: var(--gap-4) 0;
  }
  h3 {
    margin-bottom: var(--gap-3);
  }

  li {
    margin-bottom: var(--gap-2);
  }
  a {
    color: var(--black);
    padding-bottom: 0.125rem;
    text-decoration: none;
    border-bottom: 1px dotted;
  }
</style>
