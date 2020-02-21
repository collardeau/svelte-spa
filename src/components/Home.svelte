<script>
  import { works, projects, blogs } from "../data";
  import Intro from "./Intro.svelte";
  import Section from "./Section.svelte";
</script>

<div class="page home-page">
  <section>
    <Intro />
  </section>
  <Section title="works" items={works} let:item>
    <a href={item.href}>{item.title}</a>
  </Section>
  <Section title="projects" items={projects} let:item>
    <a href={item.href}>{item.title}</a>
  </Section>
</div>

<style>
  .home-page {
    text-align: center;
  }
</style>
