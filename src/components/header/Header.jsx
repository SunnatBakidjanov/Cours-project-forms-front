import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';

import { MainTitle } from '../../UI/main-title/MainTitle';
import { LoginProfile } from './UI/login-profile/LoginProfile';
import { Underline } from './UI/underline/Underliner';

import classNames from 'classnames';
import styles from './header.module.scss';

export const Header = () => {
	const { header } = useThemeVar();

	return (
		<header className={classNames(styles.header, header.borderBottomColor)}>
			<Underline />

			<div className="container">
				<div className={classNames(styles.wrapper)}>
					<MainTitle text="Forms" className={classNames(styles.title)} />

					<label htmlFor="">
						<input type="search" />
					</label>

					<LoginProfile />
				</div>
			</div>
		</header>
	);
};
