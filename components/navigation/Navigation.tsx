/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './Navigation.module.scss';
import { ReactNode } from 'react';

type Props = {
	navButtons?: ReactNode;
};

export default function Navigation({ navButtons }: Props) {
	return (
		<>
			<nav>
				{/* Logo */}
				<a
					className={`${styles['nav-logo']}`}
					href='/'>
					GBRL
					<br />
					TNco
				</a>

				{/* Navigation list */}
				<div className={styles['nav-list']}>{navButtons}</div>
			</nav>
		</>
	);
}
