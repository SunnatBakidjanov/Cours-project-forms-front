import { use } from 'react';
import { useDisable } from '../../hooks/useDisable';
import { useThemeVar } from '../../hooks/useThemeVar/useThemeVar';

import { ThemeContext } from '../../context/theme';
import { Button } from '../button/Button';
import { ChangeThemeImg } from './UI/changeThemeImg/ChengeThemeImg';

import styles from './change-theme-button.module.scss';
import classNames from 'classnames';
import sunImg from '/imgs/webp/changeThemeSun.webp';
import moonImg from '/imgs/webp/changeThemeMoon.webp';

export const ChangeThemeButton = () => {
	const { toggleTheme, isThemeLight } = use(ThemeContext);
	const { root } = useThemeVar();

	const DISABLE_DILAY = 520;
	const { handleDisableonClick, isDisabled } = useDisable(DISABLE_DILAY);

	return (
		<Button
			onClick={() => {
				toggleTheme();
				handleDisableonClick();
			}}
			disabled={isDisabled}
			className={classNames(styles.button, root.toolbarBtnBgColor)}
		>
			<span className={classNames(styles.moonSunRoot, isThemeLight ? styles.sunVisible : styles.sunHidden)}>
				<ChangeThemeImg src={sunImg} styleUsePlace="sun" />
			</span>
			<span className={classNames(styles.moonSunRoot, isThemeLight ? styles.moonHidden : styles.moonVisible)}>
				<ChangeThemeImg src={moonImg} styleUsePlace="moon" />
			</span>
		</Button>
	);
};
