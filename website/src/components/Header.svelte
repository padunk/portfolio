<style lang="scss">
   @import "./style/global.scss";

   .hero {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-rows: repeat(2, min-content);
      justify-items: center;
      font-size: 1.2rem;

      &__date {
         grid-column: 1 / -1;
         justify-self: end;
      }

      &__title {
         text-align: center;

         h2 {
            border-left: 2px solid $dark-gray;
            border-right: 2px solid $dark-gray;
            padding: 1rem 4rem 1rem 4rem;
            letter-spacing: .5rem;
            font-size: 2.6rem;
         }

         p {
            font-size: 1.6rem;
         }
      }
   }
</style>


<header class="hero mb-md">
   <time class="hero__date mb-sm">15 January 2020</time>
   <div class="hero__contact">
      <p>Phone: <a href="tel:+6282169879998">+62 821 6987 9998</a></p>
      <p>Email:  <a href="mailto: abraham.agel@outlook.com?Subject=Can%20we%20connect?" target="_top">abraham.agel@outlook.com</a></p>
      <p>Padang, West Sumatera</p>
   </div>
   <div class="hero__title">
      <h2>ABRAHAM A. AGUNG</h2>
      <div class="divider"></div>
      <p>Curious web developer</p>
   </div>
   <div class="hero__forecast">
      <p>Weather forecast in your location</p>
      <p>13 - 19 January 2020</p>
      <p>Rainy, 30deg Celcius</p>
   </div>
</header>