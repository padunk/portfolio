<script>
  //   export let timeToShow;

  let d = new Date();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  let show = new Intl.DateTimeFormat("default", options).format(d);
  // Monday, March 30, 2020
</script>

<style>
  .date {
    display: block;
    text-align: right;
    font-size: 1.8rem;
    padding-right: 4rem;
    padding-top: 2rem;
  }
</style>

<time class="date">{show}</time>
