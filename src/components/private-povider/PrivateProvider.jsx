import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout, setAccessToken, setUser } from '../../redux/slices/authSlice';
import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';
import axiosPrivate from '../../api/axiosPrivate';

import { Loader } from '../../UI/submit-btn-loader/Loader';

import classNames from 'classnames';
import styles from './private-provider.module.scss';
import { Background } from '../../UI/background/Background';

const PrivateProvider = ({ children }) => {
	const dispatch = useDispatch();
	const [initialized, setInitialized] = useState(false);
	const { root } = useThemeVar();

	useEffect(() => {
		const loadUser = async () => {
			try {
				const res = await axiosPrivate.get('/api/check-me');

				dispatch(setUser(res.data.user));

				if (res.data.accessToken) {
					dispatch(setAccessToken(res.data.accessToken));
				}
			} catch (err) {
				console.error('PrivateProvider error:', err);
				console.log(err.response.data);

				dispatch(logout());
			} finally {
				setInitialized(true);
			}
		};

		if (!initialized) {
			loadUser();
		}
	}, [dispatch, initialized]);

	return !initialized ? (
		<div className={classNames(styles.wrapper)}>
			<Background />
			<Loader className={classNames(root.loaderPage)} styleUsePlace="pageLoader" />
		</div>
	) : (
		children
	);
};

export default PrivateProvider;
