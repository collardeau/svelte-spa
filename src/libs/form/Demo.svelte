<script context="module">
  import createStore from "./createStore";
  import Store from "../../demo/Store.svelte";

  const inputs = [
    {
      name: "name", // required
      type: "text", // any input type
      defaultValue: " some name    ", // needed to enable store.reset
      label: "Label", // optional label
      placeholder: "placeholder" // pass any html attribute
    }
    // type select is not yet available
  ];

  const store = createStore(inputs);
</script>

<script>
  let disableForm;

  // store.update(st => ({ ...st, name: "   some name      " }));

  const onSubmit = (values, store) => {
    disableForm(true);
    console.log("message submitted: ", values);
    store.reset();
    setTimeout(() => {
      // doing some async stuff with form values
      disableForm(false);
    }, 1000);
  };
</script>

<Store {store} />
