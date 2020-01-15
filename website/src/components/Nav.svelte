<script>
  export let segment;
</script>

<style lang="scss">
	@import "./style/global.scss";
  .navigation {
	  position: sticky;
	  top: 0;
	  z-index: 1000;
	  background-color: $light-gray;
    &__lists {
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		place-items: center;
		column-gap: 1rem;
    }

    &__list {
		 text-align: center;
		 font-size: 1.3rem;
		 a {
			 h3 {
            letter-spacing: .5rem;
			 }
		 }
      a:link,
      a:visited {
        text-decoration: none;
      }
    }
  }
</style>

<nav class="navigation mb-md">
  <ul class="navigation__lists">
    <li class="navigation__list">
      <a class:selected={segment === undefined} href=".">
        <h3>Home</h3>
        <div class="divider" />
        <p>What's the weather today?</p>
      </a>
    </li>
    <li class="navigation__list">
      <a class:selected={segment === 'about'} href="about">
        <h3>Projects</h3>
        <div class="divider" />
        <p>Some beautiful projects made with ❤️❤️❤️.</p>
      </a>
    </li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
    <li class="navigation__list">
      <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
        <h3>Blogs</h3>
        <div class="divider" />
        <p>Sharing knowledge and enabled others dreams.</p>
      </a>
    </li>
  </ul>
</nav>
