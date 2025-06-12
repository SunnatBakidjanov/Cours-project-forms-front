import { use } from 'react';
import { ThemeContext } from '../../../../components/theme';

import classNames from 'classnames';
import styles from './gear.module.scss';

import gearImg from '../../../../assets/imgs/svg/gear.svg';

export const GearImg = ({ styleUsePlace }) => {
	const { isThemeLight } = use(ThemeContext);

	return (
		<img
			className={classNames(isThemeLight ? styles.lightTheme : styles.darkTheme, {
				[styles.technicalWorkGearOne]: styleUsePlace === 'technicalWorkGearOne',
				[styles.technicalWorkGearTwo]: styleUsePlace === 'technicalWorkGearTwo',
			})}
			src={gearImg}
			alt=""
		/>
	);
};
