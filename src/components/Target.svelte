<script>
  import ProjectPage from "./ProjectPage.svelte";
</script>

<ProjectPage>
  <h3>Target Innovations</h3>
  <section>
    <h5>Responsabilities</h5>
    <div>
      <strong>Lead Developer</strong>
      <br />
      sit amet consectetur adipisicing elit. Fugit eligendi, recusandae placeat
      doloremque necessitatibus
      <strong>distinctio</strong>
      . Commodi optio debitis fugiat aut obcaecati accusantium repellendus quas,
      doloribus id consequuntur aliquid beatae.
    </div>
  </section>
  <section>
    <h5>Slides</h5>
    <div class="slideshow" />
  </section>
  <section>
    <h5>Links</h5>
    <ul>
      <li>
        <a href="link1">link 1</a>
      </li>
      <li>
        <a href="link2">link 2</a>
      </li>
      <li>
        <a href="link 3">link 3</a>
      </li>
    </ul>
  </section>

</ProjectPage>

<style>
  h5 {
    margin-bottom: var(--gap-4);
    font-size: var(--text-base);
  }
  section {
    padding: var(--gap-4) 0;
    text-align: left;
  }
  .slideshow {
    background-color: var(--theme-color);
    min-height: var(--size-6);
  }
</style>
