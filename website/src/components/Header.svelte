<script>
  import Divider from "./Divider.svelte";
  import DisplayTime from "./DisplayTime.svelte";
</script>

<style lang="scss">
  @import "./style/global.scss";

  .hero {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, max-content));
    column-gap: 3rem;
    place-items: center;
    justify-content: center;
    font-size: 1.2rem;
    padding: 3rem 4rem 0 4rem;

    &__title {
      text-align: center;

      h2 {
        padding: 1rem 4rem;
        letter-spacing: 0.4rem;
        font-size: 2.6rem;
      }
      p {
        font-size: 1.6rem;
      }
    }
  }
</style>

<DisplayTime />
<header class="hero mb-md">
  <div class="hero__contact">
    <p>
      Phone:
      <a href="tel:+6282169879998">+62 821 6987 9998</a>
    </p>
    <p>
      Email:
      <a
        href="mailto: abraham.agel@outlook.com?Subject=Can%20we%20connect?"
        target="_top">
        abraham.agel@outlook.com
      </a>
    </p>
    <p>Padang, West Sumatera</p>
  </div>
  <Divider width={1} color="black" />
  <div class="hero__title">
    <h2>ABRAHAM A. AGUNG</h2>
    <div class="divider" style="width: 50%;" />
    <p>Curious web developer</p>
  </div>
  <Divider width={1} color="black" />
  <div class="hero__forecast">
    <p>Weather forecast in your location</p>
    <p>13 - 19 January 2020</p>
    <p>Rainy, 30deg Celcius</p>
  </div>
</header>
