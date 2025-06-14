import styles from './tranlation-img.module.scss';

import translaitorIcon from '../../../../assets/imgs/svg/translaitorIcon.svg';

export const TranslationImg = () => {
	return <img className={styles.img} src={translaitorIcon} alt="" />;
};
