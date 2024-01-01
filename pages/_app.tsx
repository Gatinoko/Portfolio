/* eslint-disable react/jsx-key */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation from '@/components/navigation/navigation';
import { Footer } from '@/components/footer/footer';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navigation />

			<Component {...pageProps} />

			<Footer />
		</>
	);
}
