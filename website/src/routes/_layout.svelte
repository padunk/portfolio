<script>
	import Nav from '../components/Nav.svelte';
	import Header from '../components/Header.svelte';

	export let segment;
</script>

<style lang="scss" global>
	@import "./style/global.scss";
</style>

<Header />
<Nav {segment}/>

<main>
	<slot></slot>
</main>