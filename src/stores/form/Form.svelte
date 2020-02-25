<script>
  // todo: as a layout comp with form store creator
  const store = {};
  export let name = "";
  export let onSubmit = x => x;
  export let disabled = false;
  export const disable = bool => (disabled = bool);

  const onFormSubmit = e => {
    e.preventDefault();
    store.sanitize();
    onSubmit($store, store);
  };
</script>

<form {name} on:submit={onFormSubmit}>
  {#each store.inputs as { name, type, label, ...rest }}
    <div class="input-container">
      {#if label}
        <label for={name}>{label}</label>
      {/if}
      {#if type === 'textarea'}
        <textarea
          {name}
          {...rest}
          value={$store[name]}
          on:input={e => {
            store.merge({ [name]: e.target.value });
          }} />
      {:else if type === 'checkbox'}
        <input
          {name}
          {type}
          {...rest}
          checked={$store[name]}
          on:input={e => {
            store.merge({ [name]: e.target.checked });
          }} />
      {:else if type === 'select'}
        <div>todo: select inputs</div>
      {:else}
        <input
          {name}
          {type}
          {...rest}
          value={$store[name]}
          on:input={e => {
            store.merge({ [name]: e.target.value });
          }} />
      {/if}

    </div>
  {/each}
  <slot>
    <button type="submit" {disabled}>submit</button>
  </slot>
</form>

<style>
  form {
    background-color: var(--form-bg-color);
    padding: var(--form-padding);
  }
</style>
