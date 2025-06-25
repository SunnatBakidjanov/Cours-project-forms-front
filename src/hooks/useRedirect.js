import { useNavigate } from 'react-router-dom';

export const useRedirect = (place, timer = 3000) => {
	const navigate = useNavigate();

	const redirect = (state = {}) => {
		setTimeout(() => {
			navigate(place, {
				state,
			});
		}, timer);
	};

	return redirect;
};
