'use client';

import { useState } from 'react';
import { Button } from '../button/button';
import { Logo } from './logo/logo';
import { MobileButton } from './mobile-navigation-list/mobile-button/mobile-button';
import { MobileNavigationList } from './mobile-navigation-list/mobile-navigation-list';
import { Icon } from '../icon/icon';

/**
 * Custom type declaration for the `Navigation` React component properties.
 */
type NavigationProps = {};

/**
 * React component.
 *
 * @param {NavigationProps} props - Component properties.
 */
export function Navigation(props: NavigationProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className='navigation'>
			<div className='navigation-root'>
				{/* Logo */}
				<Logo href='#IntroSection' />

				{/* Desktop navigation buttons */}
				<ul className='desktop-button-list'>
					<li>
						<Button
							className='tech-and-skills-button'
							size={'extra-small'}
							variant={'flat'}>
							Tech & Skills
						</Button>
					</li>
					<li>
						<Button
							className='projects-button'
							size={'extra-small'}
							variant={'flat'}>
							Projects
						</Button>
					</li>
				</ul>

				{/* Mobile navigation hamburguer button */}
				<Button
					aria-label={'Toggle mobile menu'}
					className='mobile-hamburguer-button'
					size={'small'}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					variant={'flat'}
					icon={
						<Icon
							name={'right-chevron'}
							size={'extra-large'}
						/>
					}
				/>
			</div>

			{/* Mobile navigation buttons */}
			<MobileNavigationList open={isMobileMenuOpen}>
				<MobileButton
					key={0}
					href='#Tech&SkillsSection'>
					Tech & Skills
				</MobileButton>
				<MobileButton
					key={1}
					href='#ProjectsSection'>
					Projects
				</MobileButton>
			</MobileNavigationList>
		</nav>
	);
}
