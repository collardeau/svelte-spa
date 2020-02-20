<script>
  import { works, projects, blogs } from "../data";
  import Intro from "./Intro.svelte";
  import Section from "./Section.svelte";
</script>

<div class="page">
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
  .page {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    line-height: 1.4;
  }
</style>
