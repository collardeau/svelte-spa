<script context="module">
  import createStore from "./createStore";

  const inputs = [
    {
      name: "name", // required
      type: "text", // any input type
      defaultValue: "", // needed to enable store.reset
      label: "Name", // optional label
      placeholder: "your name" // pass any html attribute
    },
    {
      name: "message",
      type: "textarea",
      defaultValue: "",
      label: "Message",
      required: true,
      placeholder: "your message"
    }
    // select inputs not yet available
  ];

  createStore("my-form", inputs);
</script>

<script>
  import Form from "./Form.svelte";

  let disableForm;

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

<div class="container">
  <Form name="my-form" {onSubmit} bind:disable={disableForm} />
</div>

<style>
  .container {
    --form-padding: var(--gap-4);
  }
</style>
