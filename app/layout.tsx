import { Metadata } from 'next';
import '../styles/globals.scss';
import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/navigation/Navigation';
import { PropsWithChildren } from 'react';
import { Syne, Major_Mono_Display, Open_Sans } from 'next/font/google';

const syne = Syne({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-syne',
	weight: ['400', '500', '600', '700'],
});
const majorMonoDisplay = Major_Mono_Display({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-major-mono',
	weight: '400',
});
const openSans = Open_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-open-sans',
	weight: ['300', '400', '600'],
});

export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
};

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html
			lang='en'
			className='dark-theme'>
			<body
				className={`${syne.variable} ${majorMonoDisplay.variable} ${openSans.variable}`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
