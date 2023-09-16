/* eslint-disable @next/next/no-html-link-for-pages */
import { cva } from 'class-variance-authority';
import styles from './navigation.module.scss';
import { ReactNode, useState } from 'react';
import Button from '../button/button';

type Props = {
	navButtons?: ReactNode;
};

const navigation = cva('navigation', {
	variants: {
		open: {
			true: 'open',
			false: 'closed',
		},
	},
	defaultVariants: {
		open: true,
	},
});

export default function Navigation(props: Props) {
	const { navButtons } = props;

	const [open, setOpen] = useState(true);

	return (
		<>
			<nav className={navigation({ open })}>
				{/* Navigation */}
				<div className='logo-button-container'>
					{/* Logo */}
					<a
						className='nav-logo'
						href='#IntroSection'>
						GBRL
						<br />
						TNco
					</a>

					{/* Desktop navigation buttons */}
					<ul className='section-list'>
						<li>
							<Button
								className='tech-and-skills-button'
								size={'extra-small'}
								text='Tech & Skills'
							/>
						</li>
						<li>
							<Button
								className='projects-button'
								size={'extra-small'}
								text='Projects'
							/>
						</li>
					</ul>

					{/* Mobile navigation hamburguer button */}
					<Button
						className='mobile-hamburguer'
						prefixIcon={'left-chevron'}
						size={'extra-small'}
						onClick={() => setOpen(!open)}
					/>
				</div>
				<div className='nav-list'>{navButtons}</div>
			</nav>
		</>
	);
}
