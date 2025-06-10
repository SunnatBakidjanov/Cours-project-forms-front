import classNames from 'classnames';

import styles from './gear.module.scss';

import gearImg from '/imgs/svg/gear.svg';

export const GearImg = ({ styleUsePlace }) => {
	return (
		<img
			className={classNames({
				[styles.technicalWorkGearOne]: styleUsePlace === 'technicalWorkGearOne',
				[styles.technicalWorkGearTwo]: styleUsePlace === 'technicalWorkGearTwo',
			})}
			src={gearImg}
			alt=""
		/>
	);
};
