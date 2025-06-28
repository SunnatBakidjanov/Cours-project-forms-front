import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout, setAccessToken, setUser } from '../../redux/slices/authSlice';
import axiosPrivate from '../../api/axiosPrivate';

import { Loader } from '../../UI/submit-btn-loader/Loader';

import classNames from 'classnames';

const PrivateProvider = ({ children }) => {
	const dispatch = useDispatch();
	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const loadUser = async () => {
			try {
				const res = await axiosPrivate.get('/api/me');

				if (!isMounted) return;

				dispatch(setUser(res.data.user));

				if (res.data.accessToken) {
					dispatch(setAccessToken(res.data.accessToken));
				}
			} catch (err) {
				console.error('PrivateProvider error:', err);
				console.log(err.response.data.message);

				if (isMounted) {
					dispatch(logout());
				}
			} finally {
				setInitialized(true);
			}
		};

		if (!initialized) {
			loadUser();
		}

		return () => {
			isMounted = false;
		};
	}, [dispatch, initialized]);

	if (!initialized) return <Loader className={classNames} styleUsePlace="pageLoader" />;

	return children;
};

export default PrivateProvider;
