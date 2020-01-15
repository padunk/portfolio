<style lang="scss">
  @import "./style/global.scss";

  .main__image {
    background: url("https://images.unsplash.com/photo-1540248572626-cab5007d2f46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1579&q=80")
      no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 180vh;
    position: relative;
  }

  .quote {
    position: absolute;
    background-color: hsla(0, 0, 0, 0.1);
    color: white;
    padding: 2rem 4rem;
    right: 0;
    top: 15%;

    &__text {
      font-size: 3rem;
      text-transform: uppercase;
    }

    &__author {
      text-align: right;
    }
  }
</style>

<section class="main__image mb-sm">
  <div class="quote">
    <p class="quote__text">REACH YOUR DREAMS</p>
    <p class="quote__author">Bruce Lee</p>
  </div>
</section>

<section />
