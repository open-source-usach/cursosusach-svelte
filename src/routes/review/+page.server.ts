export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const date = new Date();

		const courseContent = formData.get('course_content');
		const difficulty = formData.get('difficulty');
		const usefulness = formData.get('usefulness');

		if (courseContent && difficulty && usefulness) {
			console.log('valid');
			console.log(date);
		}
	}
};
