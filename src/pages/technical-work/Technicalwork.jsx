import { MainTitle } from '../../components/main-title/MainTitle';
import { CountdownTimer } from './UI/count-down-timer/CountdownTimer';
import { GearImg } from './UI/gear-img/GearImg';

import styles from './technical-work.module.scss';

export const Technicalwork = () => {
	return (
		<section className={styles.section}>
			<div className="container">
				<div className={styles.wrapper}>
					<MainTitle text="Ведутся технические работы" styleUsePlace="technicalWork" />

					<div className={styles.innerImg}>
						<GearImg styleUsePlace="technicalWorkGearOne" />
						<GearImg styleUsePlace="technicalWorkGearTwo" />
					</div>

					<CountdownTimer />
				</div>
			</div>
		</section>
	);
};
