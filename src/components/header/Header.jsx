import { useSelector } from 'react-redux';

import { Profile } from './profile/Profile';
import { LoginButton } from './loginBtn/LoginButton';
import { MainTitle } from '../../UI/main-title/MainTitle';

import classNames from 'classnames';
import styles from './header.module.scss';

export const Header = () => {
	const accessToken = useSelector(state => state.auth.accessToken);

	return (
		<header className={classNames(styles.header)}>
			<div className="container">
				<div className={classNames(styles.wrapper)}>
					<MainTitle text="Forms" />

					<label htmlFor="">
						<input type="search" />
					</label>

					{accessToken ? <Profile /> : <LoginButton />}
				</div>
			</div>
		</header>
	);
};
