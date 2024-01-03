import { Metadata } from 'next';
import '../styles/globals.scss';
import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/navigation/Navigation';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Welcome to Next.js',
};

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body>
				<Navigation />
				{children}
			</body>
			<Footer />
		</html>
	);
}
