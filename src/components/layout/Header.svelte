<script>
  import { getContext } from "svelte";
  import Nav from "./Nav.svelte";

  const title = "Svelte Spa";
</script>

<div class="container">
  <header>
    <a href="#/">
      <img src="logo.png" alt="logo" />
      <h1>{title}</h1>
    </a>
    <div />
    <Nav />
  </header>
</div>

<style>
  .container {
    background-color: var(--white);
    border-bottom: 1px solid #ddd;
  }
  header {
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    align-items: center;
    padding: var(--gap-2) var(--gap-1);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  h1 {
    color: var(--black);
    margin: 0;
    padding: 0;
    font-size: var(--text-base);
  }
  a {
    display: grid;
    grid-template-columns: minmax(var(--gap-6), var(--gap-7)) max-content;
    align-items: center;
    grid-gap: var(--gap-2);
    color: var(--black);
  }
  a:hover {
    text-decoration: none;
  }
  img {
    width: 100%;
  }
</style>
