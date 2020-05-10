<script>
  import { bookDetails } from "./data";
  export let params = [];
  $: slug = params[0];
  $: book = bookDetails[slug] || {};
  $: title = book.title || "Book Title";
  $: author = book.author || "Author";
  $: quotes = book.quotes || [];
</script>

<section class="col">
  <div class="center">
    <h1>{title}</h1>
  </div>
  {#each quotes as { txt, chapter }}
    <article class="center">"{txt}"</article>
  {/each}
</section>
