import { Metadata } from 'next';
import '../../styles/globals.scss';
import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/navigation/Navigation';
import { PropsWithChildren } from 'react';
import { Syne, Major_Mono_Display, Open_Sans } from 'next/font/google';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/i18nConfig';

const syne = Syne({
	subsets: ['latin'],
	display: 'swap',
	variable: '--FONT-SYNE',
	weight: ['400', '500', '600', '700'],
});
const majorMonoDisplay = Major_Mono_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--FONT-MAJOR-MONO',
	weight: '400',
});
const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--FONT-OPEN-SANS',
	weight: ['300', '400', '600'],
});

export const metadata: Metadata = {
	title: "Gabriel's Portfolio",
};

export default async function RootLayout({
	children,
	params,
}: PropsWithChildren & {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(params.lang);

	return (
		<html
			lang={params.lang}
			className='dark-theme'>
			<body
				className={`${syne.variable} ${majorMonoDisplay.variable} ${openSans.variable}`}>
				<Navigation dictionary={dictionary.navigation} />
				{children}
				<Footer dictionary={dictionary.footer} />
			</body>
		</html>
	);
}
