import { Syne } from 'next/font/google';
import styles from './NavButton.module.scss';

export default function NavButton() {
	return (
		<>
			<div className={styles['nav-button']}>
				<span className={styles['nav-button-text']}>button</span>
			</div>
		</>
	);
}
