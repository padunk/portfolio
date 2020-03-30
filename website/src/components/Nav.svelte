<script>
  import Spacer from "./Spacer.svelte";

  export let segment;
</script>

<style lang="scss">
  @import "./style/global.scss";
  .navigation {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: $light-gray-transparent;
    &__lists {
      border-top: 1px solid $dark-gray;
      padding-top: 1.5rem;
      width: 90%;
      margin: 0 auto;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      place-items: center;
      column-gap: 1.5rem;
    }

    &__list {
      text-align: center;
      font-size: 1.3rem;

      a {
        h3 {
          letter-spacing: 0.5rem;
        }
        .divider {
          width: 30%;
        }
      }
      a:link,
      a:visited {
        text-decoration: none;
        transition: color 300ms;
        color: $dark-gray;
      }

      a:hover {
        color: orangered;
        p {
          text-decoration: underline;
        }
      }
    }
  }
</style>

<nav class="navigation mb-md">
  <ul class="navigation__lists">
    <li class="navigation__list">
      <a class:selected={segment === undefined} href=".">
        <h3>Home</h3>
        <Spacer height={10} />
        <p>What's the weather today?</p>
      </a>
    </li>
    <li class="navigation__list">
      <a class:selected={segment === 'about'} href="about">
        <h3>Projects</h3>
        <Spacer height={10} />
        <p>Some beautiful projects made with ❤️❤️❤️.</p>
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li class="navigation__list">
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
        <h3>Blogs</h3>
        <Spacer height={10} />
        <p>Just my 💸💸 cents.</p>
      </a>
    </li>
    <li class="navigation__list">
      <a rel="prefetch" class:selected={segment === 'tutorial'} href="tutorial">
        <h3>Tutorial</h3>
        <Spacer height={10} />
        <p>Sharing knowledge and enabled others dreams.</p>
      </a>
    </li>
  </ul>
</nav>
