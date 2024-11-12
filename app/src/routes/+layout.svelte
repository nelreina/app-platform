<script>
	import { i18n } from "$lib/i18n";
	import { ParaglideJS } from "@inlang/paraglide-sveltekit";
	import '../app.css';
	import { base } from '$app/paths';

	let { children } = $props();
</script>

<ParaglideJS {i18n}>
	<nav>
		<a href="/">Landing</a>
		<a href="{base}">Home</a>
		<a href="{base}/demo/posts">Posts</a>
		<a href="{base}/demo/socket">SocketIO</a>
		<a href="{base}/demo/paraglide">Paraglide</a>
		<a href="/strapi/admin">Strapi Admin</a>
	</nav>
	{@render children()}
</ParaglideJS>
