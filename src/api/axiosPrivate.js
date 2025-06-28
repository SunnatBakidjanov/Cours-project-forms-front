import axios from 'axios';
import { store } from '../redux/store';
import { setAccessToken, logout } from '../redux/slices/authSlice';

const APP_URL = import.meta.env.VITE_API_URL;

const axiosPrivate = axios.create({
	baseURL: APP_URL,
	withCredentials: true,
});

axiosPrivate.interceptors.request.use(config => {
	const token = store.getState().auth.accessToken;
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}
	return config;
});

axiosPrivate.interceptors.response.use(
	res => res,
	async error => {
		const originalRequest = error.config;

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				const res = await axios.post(`${APP_URL}/api/refresh-token`, {}, { withCredentials: true });

				const newAccessToken = res.data.accessToken;
				store.dispatch(setAccessToken(newAccessToken));

				originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
				return axiosPrivate(originalRequest);
			} catch (err) {
				store.dispatch(logout());
				return Promise.reject(err);
			}
		}

		return Promise.reject(error);
	}
);

export default axiosPrivate;
