import { Locale, i18n } from '@/i18n/i18nConfig';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FooterList } from '../footer-list/footer-list';

/**
 * Custom type declaration for the `LocaleSwitcher` React component properties.
 */
export type LocaleSwitcherProps = {
	headerText: string;
};

/**
 * React component.
 */
export function LocaleSwitcher({ headerText }: LocaleSwitcherProps) {
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
		<FooterList headerText={headerText}>
			{i18n.locales.map((locale, index) => {
				return (
					<Link
						key={`locale-${index}`}
						href={redirectedPathname(locale)}>
						{assignLocaleLabels(locale)}
					</Link>
				);
			})}
		</FooterList>
	);
}
