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
				<div className={`${styles['nav-logo']}`}>
					<span style={{ fontSize: '120px' }}>
						GB
						<br />
						RL
					</span>
				</div>

				{/* Navigation list */}
				<div className={styles['nav-list']}>{navButtons}</div>
			</nav>
		</>
	);
}
