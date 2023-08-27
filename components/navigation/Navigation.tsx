/* eslint-disable @next/next/no-html-link-for-pages */
import styles from './navigation.module.scss';
import { ReactNode } from 'react';

type Props = {
	navButtons?: ReactNode;
};

export default function Navigation({ navButtons }: Props) {
	return (
		<>
			<nav className={'navbar'}>
				{/* Logo */}
				<a
					className={'nav-logo'}
					href='#IntroSection'>
					GBRL
					<br />
					TNco
				</a>

				{/* Navigation list */}
				<div className={'nav-list'}>{navButtons}</div>
			</nav>
		</>
	);
}
