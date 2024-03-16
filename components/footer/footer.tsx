'use client';

import React from 'react';
import { LocaleSwitcher } from './locale-switcher/locale-switcher';
import { FooterList } from './footer-list/footer-list';
import Link from 'next/link';

/**
 * Custom type declaration for the `Footer` React component properties.
 */
export type FooterProps = {};

/**
 * React component.
 *
 * @param {FooterProps} props - Component properties.
 */
export function Footer(props: FooterProps) {
	return (
		<footer className='footer'>
			<LocaleSwitcher />

			<FooterList headerText='Code'>
				<Link href={'https://github.com/Gatinoko'}>GitHub</Link>
			</FooterList>
		</footer>
	);
}
