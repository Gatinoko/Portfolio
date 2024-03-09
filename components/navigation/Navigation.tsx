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
							size={'extra-small'}
							variant={'flat'}
							onClick={() => scrollToSection('ContactSection')}>
							Contact
						</Button>
					</li>
					<li>
						<Button
							size={'extra-small'}
							variant={'flat'}
							onClick={() => scrollToSection('ProjectsSection')}>
							Projects
						</Button>
					</li>
					<li>
						<Button
							size={'extra-small'}
							variant={'flat'}
							onClick={() => scrollToSection('EducationTimelineSection')}>
							Education
						</Button>
					</li>
					<li>
						<Button
							size={'extra-small'}
							variant={'flat'}
							onClick={() => scrollToSection('CareerTimelineSection')}>
							Career
						</Button>
					</li>
					<li>
						<Button
							size={'extra-small'}
							variant={'flat'}
							onClick={() => scrollToSection('Tech&SkillsSection')}>
							Tech & Skills
						</Button>
					</li>
				</ul>

				{/* Mobile navigation hamburguer button */}
				<Button
					aria-label={'Toggle mobile '}
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
					onClick={() => scrollToSection('Tech&SkillsSection')}>
					Tech & Skills
				</MobileButton>
				<MobileButton
					key={1}
					onClick={() => scrollToSection('TimelineSection')}>
					Timeline
				</MobileButton>
				<MobileButton
					key={1}
					onClick={() => scrollToSection('ProjectsSection')}>
					Projects
				</MobileButton>
				<MobileButton
					key={1}
					onClick={() => scrollToSection('ContactSection')}>
					Contact
				</MobileButton>
			</MobileNavigationList>
		</nav>
	);
}
