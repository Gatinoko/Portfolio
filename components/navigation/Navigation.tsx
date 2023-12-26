import { useState } from 'react';
import Button from '../button/button';
import Logo from './logo/logo';
import MobileButton from './mobile-navigation-list/mobile-button/mobile-button';
import MobileNavigationList from './mobile-navigation-list/mobile-navigation-list';

/**
 * Custom type declaration for the `Navigation` React component properties.
 */
type NavigationProps = {};

/**
 * React component.
 *
 * @param {NavigationProps} props - Component properties.
 */
export default function Navigation(props: NavigationProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className='navigation'>
			<div className='navigation-root'>
				{/* Logo */}
				<a
					className='logo'
					href='#IntroSection'>
					<Logo />
				</a>

				{/* Desktop navigation buttons */}
				<ul className='desktop-button-list'>
					<li>
						<Button
							className='tech-and-skills-button'
							size={'extra-small'}
							text='Tech & Skills'
							variant={'flat'}
						/>
					</li>
					<li>
						<Button
							className='projects-button'
							size={'extra-small'}
							text='Projects'
							variant={'flat'}
						/>
					</li>
				</ul>

				{/* Mobile navigation hamburguer button */}
				<Button
					className='mobile-hamburguer-button'
					prefixIcon={'left-chevron'}
					size={'small'}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					variant={'flat'}
				/>
			</div>

			{/* Mobile navigation buttons */}
			<MobileNavigationList open={isMobileMenuOpen}>
				<MobileButton
					key={0}
					text='Tech & Skills'
					href='#Tech&SkillsSection'
				/>
				<MobileButton
					key={1}
					text='Projects'
					href='#ProjectsSection'
				/>
			</MobileNavigationList>
		</nav>
	);
}
