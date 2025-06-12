import { ChangeThemeButton } from '../../UI/change-theme-button/ChangeThemeButton';
import { Background } from './UI/background/Background';
import { CountdownTimer } from './UI/count-down-timer/CountdownTimer';
import { CountdownText } from './UI/cunt-down-text/CountDownText';
import { GearImg } from './UI/gear-img/GearImg';
import { Title } from './UI/title/Title';

import styles from './technical-work.module.scss';

export const Technicalwork = () => {
	return (
		<section className={styles.section}>
			<Background />

			<div className="container">
				<div className={styles.wrapper}>
					<div className={styles.menu}>
						<ChangeThemeButton />
					</div>

					<Title />

					<div className={styles.innerImg}>
						<GearImg styleUsePlace="technicalWorkGearOne" />
						<GearImg styleUsePlace="technicalWorkGearTwo" />
					</div>

					<div className={styles.innerCount}>
						<CountdownText />
						<CountdownTimer />
					</div>
				</div>
			</div>
		</section>
	);
};
