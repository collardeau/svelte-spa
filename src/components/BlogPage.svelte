<script>
  import Section from "./Section.svelte";
  import { blogs } from "../data";
</script>

<div class="page blog-page">
  <Section title="blog posts" items={blogs} let:item>
    {item.title}
    <small>
      <a href={item.href}>{item.platform}</a>
    </small>
  </Section>
</div>

<style>
  .blog-page {
    font-size: var(--text-lg);
  }
</style>
