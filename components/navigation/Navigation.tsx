'use client';

import { useState } from 'react';
import { Button } from '../button/button';
import { Logo } from './logo/logo';
import { MobileButton } from './mobile-navigation-list/mobile-button/mobile-button';
import { MobileNavigationList } from './mobile-navigation-list/mobile-navigation-list';
import { Icon } from '../icon/icon';
import { type getDictionary } from '../../i18n/get-dictionary';

/**
 * Custom type declaration for the `Navigation` React component properties.
 */
type NavigationProps = {
	dictionary: Awaited<ReturnType<typeof getDictionary>>['navigation'];
};

/**
 * React component.
 *
 * @param {NavigationProps} props - Component properties.
 */
export function Navigation({ dictionary }: NavigationProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Function for scrolling the page to a designated section
	function scrollToSection(sectionId: string) {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<nav className='navigation'>
			<div className='navigation-root'>
				{/* Logo */}
				<Logo href='/' />

				{/* Desktop navigation buttons */}
				<ul className='desktop-button-list'>
					<li>
						<Button
							variant={'flat'}
							onClick={() => scrollToSection('ContactSection')}>
							{dictionary.buttons.contact}
						</Button>
					</li>
					<li>
						<Button
							variant={'flat'}
							onClick={() => scrollToSection('ProjectsSection')}>
							{dictionary.buttons.projects}
						</Button>
					</li>
					<li>
						<Button
							variant={'flat'}
							onClick={() => scrollToSection('EducationTimelineSection')}>
							{dictionary.buttons.education}
						</Button>
					</li>
					<li>
						<Button
							variant={'flat'}
							onClick={() => scrollToSection('CareerTimelineSection')}>
							{dictionary.buttons.career}
						</Button>
					</li>
					<li>
						<Button
							variant={'flat'}
							onClick={() => scrollToSection('Tech&SkillsSection')}>
							{dictionary.buttons['tech&Skills']}
						</Button>
					</li>
				</ul>

				{/* Mobile navigation hamburguer button */}
				<Button
					aria-label={dictionary.buttons.hamburgerAria}
					className='mobile-hamburguer-button'
					size={'small'}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					variant={'flat'}
					icon={
						<Icon
							name={'hamburger'}
							size={'extra-large'}
						/>
					}
				/>
			</div>

			{/* Mobile navigation buttons */}
			<MobileNavigationList
				open={isMobileMenuOpen}
				setOpen={setIsMobileMenuOpen}>
				<MobileButton
					key={0}
					size='large'
					onClick={() => scrollToSection('Tech&SkillsSection')}>
					{dictionary.buttons['tech&Skills']}
				</MobileButton>
				<MobileButton
					key={1}
					size='large'
					onClick={() => scrollToSection('CareerTimelineSection')}>
					{dictionary.buttons.career}
				</MobileButton>
				<MobileButton
					key={2}
					size='large'
					onClick={() => scrollToSection('EducationTimelineSection')}>
					{dictionary.buttons.education}
				</MobileButton>
				<MobileButton
					key={3}
					size='large'
					onClick={() => scrollToSection('ProjectsSection')}>
					{dictionary.buttons.projects}
				</MobileButton>
				<MobileButton
					key={4}
					size='large'
					onClick={() => scrollToSection('ContactSection')}>
					{dictionary.buttons.contact}
				</MobileButton>
			</MobileNavigationList>
		</nav>
	);
}
