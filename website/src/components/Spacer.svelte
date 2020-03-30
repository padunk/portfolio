<script>
  export let height, color;
</script>

<style>
  .spacer {
    width: 100%;
  }
</style>

<div
  class="spacer"
  style="height: {height}px; background-color: {color ? color : ''}" />
