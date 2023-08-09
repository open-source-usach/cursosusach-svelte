<script>
	import Navbar from 'components/Navbar.svelte';
	import '../app.css';
</script>

<div class="bg-neutral-200 min-h-screen text-neutral-700">
	<div class="max-w-lg mx-auto p-4">
		<Navbar />
		<slot />
	</div>
</div>
