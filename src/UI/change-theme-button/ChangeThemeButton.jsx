import { use } from 'react';
import { useDisable } from './hooks/useDisable';

import { ThemeContext } from '../../components/theme';
import { Button } from '../button/Button';
import { ChangeThemeImg } from './UI/changeThemeImg/ChengeThemeImg';

import styles from './change-theme-button.module.scss';
import sunImg from '/imgs/webp/changeThemeSun.webp';
import moonImg from '/imgs/webp/changeThemeMoon.webp';

export const ChangeThemeButton = () => {
	const { handleDisableonClick, isDisabled } = useDisable();

	const { toggleTheme, isThemeLight } = use(ThemeContext);

	return (
		<Button
			onClick={() => {
				toggleTheme();
				handleDisableonClick();
			}}
			disabled={isDisabled}
			className={`${isThemeLight ? styles.ligthTheme : styles.darkTheme} ${styles.button}`}
		>
			<span className={`${styles.moonSunRoot} ${isThemeLight ? styles.sunVisible : styles.sunHidden}`}>
				<ChangeThemeImg src={sunImg} styleUsePlace="sun" />
			</span>
			<span className={`${styles.moonSunRoot} ${isThemeLight ? styles.moonHidden : styles.moonVisible}`}>
				<ChangeThemeImg src={moonImg} styleUsePlace="moon" />
			</span>
		</Button>
	);
};
