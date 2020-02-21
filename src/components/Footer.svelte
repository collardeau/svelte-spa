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
  <p>
    <small>
      thanks for visiting
      <a href="https://tonton.dev">tonton.dev</a>
    </small>
  </p>
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
  }
  p {
    position: relative;
    top: -1px;
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
  p,
  .svg {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
