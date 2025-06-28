import { useThemeVar } from '../../../../hooks/useThemeVar/useThemeVar';

import { Button } from '../../../../UI/button/Button';
import { Loader } from '../../../../UI/submit-btn-loader/Loader';

import styles from './login-logout-button.module.scss';
import classNames from 'classnames';

export const LoginLogoutButton = ({ text, onClick, isLoading }) => {
	const { root, loginAuthPage } = useThemeVar();

	return (
		<Button className={classNames(styles.button, root.btnSubmit, root.reverseFontColor)} text={!isLoading && text} onClick={onClick}>
			{!isLoading ? (
				<svg className={classNames(styles.img)} version="1.0" xmlns="http://www.w3.org/2000/svg" width="40.000000pt" height="40.000000pt" viewBox="0 0 40.000000 40.000000" preserveAspectRatio="xMidYMid meet">
					<g transform="translate(0.000000,40.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none">
						<path
							d="M106 324 c-3 -9 -6 -34 -6 -56 0 -54 24 -46 28 10 l3 42 70 0 69 0 0
		-120 0 -120 -69 0 -70 0 -3 42 c-4 56 -28 64 -28 10 0 -71 2 -72 100 -72 71 0
		89 3 94 16 8 20 8 228 0 248 -9 23 -179 23 -188 0z"
						/>
						<path
							d="M155 251 c-4 -7 -1 -18 5 -26 11 -13 5 -15 -39 -15 -28 0 -51 -4 -51
		-10 0 -5 23 -10 51 -10 45 0 50 -2 39 -15 -9 -10 -10 -19 -4 -25 7 -7 21 1 39
		20 l29 30 -31 31 c-20 21 -33 27 -38 20z"
						/>
					</g>
				</svg>
			) : (
				<Loader styleUsePlace="headerBtn" className={classNames(loginAuthPage.submitLoader)} />
			)}
		</Button>
	);
};
