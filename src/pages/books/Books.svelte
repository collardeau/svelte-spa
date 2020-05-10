<script>
  import { books } from "./data";
</script>

<section>
  <h3>Books</h3>
  {#each books as { title, author, date, slug }}
    <div class="book">
      <a href="#/book/{slug}">{title}</a>
      <br />
      {author}
      <br />
      {date}
    </div>
  {/each}
</section>

<style>
  section {
    text-align: center;
    margin-top: var(--gap-2);
  }
  .book {
    margin: var(--gap-4) 0;
  }
</style>
