<script lang="ts">
	import RadioFieldSet from './RadioFieldSet.svelte';
</script>

<form method="POST" action="/review" class="space-y-4 mt-4">
	<h2 class="text-black text-lg text-center">Calculo I</h2>
	<div>
		<label for="course_content" class="font-bold">¿De qué se trataba?</label>
		<textarea required name="course_content" class="w-full rounded-md h-24 p-4 mt-2" />
	</div>
	<div class="grid grid-cols-2 gap-4">
		<RadioFieldSet
			identifier="difficulty"
			legend="¿Cuán difícil fue?"
			inputs={[
				{ value: 'very_easy', label: 'Muy fácil' },
				{ value: 'easy', label: 'Fácil' },
				{ value: 'medium_easeness', label: 'Medio' },
				{ value: 'hard', label: 'Difícil' },
				{ value: 'very_hard', label: 'Muy difícil' }
			]}
		/>
		<RadioFieldSet
			identifier="usefulness"
			legend="¿Cuán útil era?"
			inputs={[
				{ value: 'very_useful', label: 'Muy útil' },
				{ value: 'useful', label: 'Útil' },
				{ value: 'medium_usefulness', label: 'Medianamente útil' },
				{ value: 'useless', label: 'Inútil' },
				{ value: 'very_useless', label: 'Muy inútil' }
			]}
		/>
	</div>
	<button
		class="text-center w-full bg-orange-500 hover:bg-orange-600 duration-300 rounded-md text-white p-4 font-bold"
		type="submit">Enviar</button
	>
</form>
