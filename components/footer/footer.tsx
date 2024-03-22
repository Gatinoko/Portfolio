'use client';

import React from 'react';
import { FooterList } from './footer-list/footer-list';
import { getDictionary } from '@/i18n/get-dictionary';
import { usePathname } from 'next/navigation';
import { Locale, i18n } from '@/i18n/i18nConfig';

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
	const pathName = usePathname();

	// Function for redirecting user to selected locale
	function redirectedPathname(locale: Locale) {
		if (!pathName) return '/';
		else {
			const segments = pathName.split('/');
			segments[1] = locale;
			return segments.join('/');
		}
	}

	// Function for assigning correct locale label
	function assignLocaleLabels(locale: Locale) {
		switch (locale) {
			case 'en':
				return 'English';
			case 'pt':
				return 'Português';
		}
	}

	return (
		<footer className='footer'>
			{/* Locale switcher */}
			<FooterList
				header={dictionary.linksHeaderText}
				items={i18n.locales.map((locale, index) => {
					return {
						text: `${assignLocaleLabels(locale)}`,
						href: `${redirectedPathname(locale)}`,
					};
				})}
			/>

			{/* Links */}
			<FooterList
				header={dictionary.linksHeaderText}
				items={[{ text: 'GitHub', href: 'https://github.com/Gatinoko' }]}
			/>
		</footer>
	);
}
