<script>
  export let width, color;
</script>

<style>
  .divider {
    height: 100%;
  }
</style>

<div
  class="divider"
  style="width: {width}px; background-color: {color ? color : ''}" />
