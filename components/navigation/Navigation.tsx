/* eslint-disable @next/next/no-html-link-for-pages */
import { cva } from 'class-variance-authority';
import { ReactNode, useState } from 'react';
import Button from '../button/button';
import Logo from './logo/logo';

type NavigationProps = {
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

export default function Navigation({ navButtons }: NavigationProps) {
	const [open, setOpen] = useState(false);

	return (
		<nav className={navigation({ open })}>
			<div className='logo-button-container'>
				{/* Logo */}
				<a
					className='logo'
					href='#IntroSection'>
					<Logo />
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
					size={'small'}
					onClick={() => setOpen(!open)}
				/>
			</div>

			{/* Mobile navigation buttons */}
			<div className='nav-list'>{navButtons}</div>
		</nav>
	);
}
