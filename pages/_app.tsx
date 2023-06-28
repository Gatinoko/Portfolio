/* eslint-disable react/jsx-key */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation from '@/components/navigation/navigation';
import NavButton from '@/components/navigation/nav-button/nav-button';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navigation
				navButtons={[
					<NavButton
						text='About Me'
						href='#AboutMeSession'
					/>,
					<NavButton
						text='Projects'
						href='#ProjectsSection'
					/>,
				]}
			/>

			<Component {...pageProps} />
		</>
	);
}
