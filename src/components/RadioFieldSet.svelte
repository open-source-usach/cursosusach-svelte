<script lang="ts">
	export let legend: string;
	export let identifier: string;
	export let inputs: { value: string; id?: string; label: string }[];
</script>

<fieldset>
	<legend class="font-bold mb-2">{legend}</legend>
	<div class="space-y-1">
		{#each inputs as input}
			<div class="flex bg-neutral-100 hover:bg-white duration-300 rounded-md">
				<input
					required
					type="radio"
					class="accent-orange-500 ml-4 mr-3"
					name={identifier}
					id={input.id || input.value}
					value={input.value}
				/>
				<label for={input.id || input.value} class="w-full py-3">{input.label}</label>
			</div>
		{/each}
	</div>
</fieldset>
