<script>
  import { getContext } from "svelte";
  import Nav from "./Nav.svelte";

  const title = "Svelte Spa";
</script>

<div class="container">
  <header>
    <a href="#/" class="left">
      <img src="logo.png" alt="logo" />
      <h1>{title}</h1>
    </a>
    <Nav />
  </header>
</div>

<style>
  .container {
    background-color: var(--white);
    border-bottom: 1px solid #ddd;
  }
  header {
    display: flex;
    justify-content: space-between;
    padding: var(--gap-2) var(--gap-1);
    max-width: var(--container-width);
    margin: 0 auto;
  }
  h1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--black);
    margin: 0;
    padding: 0;
    font-size: var(--text-base);
  }
  a {
    display: block;
    color: var(--black);
  }
  a:hover {
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
  }
  img {
    width: var(--gap-7);
    margin-right: var(--gap-1);
  }
</style>
