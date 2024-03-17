'use client';

import React from 'react';
import { LocaleSwitcher } from './locale-switcher/locale-switcher';
import { FooterList } from './footer-list/footer-list';
import Link from 'next/link';
import { getDictionary } from '@/i18n/get-dictionary';

/**
 * Custom type declaration for the `Footer` React component properties.
 */
export type FooterProps = {
	dictionary: Awaited<ReturnType<typeof getDictionary>>['footer'];
};

/**
 * React component.
 *
 * @param {FooterProps} props - Component properties.
 */
export function Footer({ dictionary }: FooterProps) {
	return (
		<footer className='footer'>
			{/* Locale switcher */}
			<LocaleSwitcher headerText={dictionary.localeSwitcherHeaderText} />

			{/* Links */}
			<FooterList headerText={dictionary.linksHeaderText}>
				<Link href={'https://github.com/Gatinoko'}>GitHub</Link>
			</FooterList>
		</footer>
	);
}
