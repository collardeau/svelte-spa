<script>
  import Swal from "sweetalert2";

  // in order to use this demo, you need to install sweetalert2.js
  // npm i roughjs@9.7.2
  // see https://sweetalert2.github.io/
</script>

<!-- a simple alert -->
<button
  on:click={() => {
    Swal.fire('hello sweet alert');
  }}>
  alert
</button>

<!-- an alert with async flow -->
<button
  on:click={() => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your imaginary file has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }}>
  confirm
</button>
