<script>
  import Section from "./Section.svelte";
  import { blogs } from "../data";
</script>

<div class="blog-page">
  <Section title="blog posts" items={blogs} let:item>
    {item.title}
    <small>
      <a href={item.href}>{item.platform}</a>
    </small>
  </Section>
</div>

<style>
  .blog-page {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: var(--text-lg);
  }
  :global(.blog-page h3) {
    font-size: var(--text-3xl);
  }
</style>
