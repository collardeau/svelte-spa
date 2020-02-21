<script>
  import { blogs } from "../data";
</script>

<div class="page blog-page">
  <section>
    <h3>Blog Posts</h3>
    <ul>
      {#each blogs as { href, source, title }}
        <li>
          {title}
          <small>
            <a {href}>{source}</a>
          </small>
        </li>
      {/each}
    </ul>
  </section>
</div>

<style>
  li {
    margin-bottom: var(--gap-3);
  }
  :global(.blog-page ul a) {
    color: var(--black);
    padding-bottom: 0.125rem;
    text-decoration: none;
    border-bottom: 1px dashed;
  }
</style>
