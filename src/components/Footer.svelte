<script>
  import Header from "./Header.svelte";
  import LogoSVG from "../svg/Logo.svelte";
  import BracketLeft from "../svg/BracketLeft.svelte";
  import BracketRight from "../svg/BracketRight.svelte";
</script>

<footer>
  <div class="svg">
    <BracketLeft />
  </div>
  <div class="content">
    <small>
      thanks for visiting
      <a href="https://tonton.dev">tonton.dev</a>
    </small>
  </div>
  <div class="svg right">
    <BracketRight />
  </div>
</footer>

<style>
  footer {
    text-align: center;
    display: flex;
    justify-content: center;
    padding: var(--gap-3);
    background-color: var(--grey);
    font-size: var(--text-sm);
    background-color: var(--white);
    border-top: 1px solid #ddd;
  }
  .svg {
    width: var(--gap-5);
    height: var(--gap-5);
  }
  .right {
    padding-left: 4px;
  }
  footer a {
    color: var(--black);
  }
  .content,
  .svg {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
