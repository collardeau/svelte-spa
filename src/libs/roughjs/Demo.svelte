<script>
  import rough from "roughjs/bin/rough";

  // in order to use this demo, you need to install roughjs
  // npm i roughjs@4.0.4
  // see https://roughjs.com/

  let roughSvg;
  function action(node) {
    roughSvg = rough.svg(node);
    const rect = roughSvg.rectangle(100, 50, 100, 50, {
      fill: "var(--theme-color)"
    }); // x, y, width, height
    node.appendChild(rect);
  }
</script>

<svg use:action />

<style>
  svg {
    width: 300px;
    height: 150px;
    background-color: var(--second-color);
  }
</style>
