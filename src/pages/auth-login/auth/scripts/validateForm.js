export const validateForm = state => {
	const errors = {};

	const nameRegex = /^\p{L}+$/u;

	if (!state.name || state.name.trim() === '') {
		errors.name = 'NAME_REQUIRED';
	} else if (state.name.trim().length < 2) {
		errors.name = 'NAME_TOO_SHORT';
	} else if (!nameRegex.test(state.name.trim())) {
		errors.name = 'NAME_INVALID_CHARACTERS';
	}

	if (!state.surname || state.surname.trim() === '') {
		errors.surname = 'SURNAME_REQUIRED';
	} else if (state.surname.trim().length < 2) {
		errors.surname = 'SURNAME_TOO_SHORT';
	} else if (!nameRegex.test(state.surname.trim())) {
		errors.surname = 'SURNAME_INVALID_CHARACTERS';
	}

	if (!state.password || state.password.trim() === '') {
		errors.password = 'PASSWORD_REQUIRED';
	}

	if (state.password !== state.repeatPassword) {
		errors.repeatPassword = 'PASSWORDS_DO_NOT_MATCH';
	}

	return errors;
};
