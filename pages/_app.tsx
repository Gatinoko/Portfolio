import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation from '@/components/navigation/Navigation';
import NavButton from '@/components/navigation/navButton/NavButton';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navigation navButtons={[<NavButton />, <NavButton />]} />
			<Component {...pageProps} />
		</>
	);
}
