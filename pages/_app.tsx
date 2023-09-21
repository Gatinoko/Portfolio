/* eslint-disable react/jsx-key */
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Navigation from '@/components/navigation/Navigation';
import NavButton from '@/components/navigation/nav-button/nav-button';
import Footer from '@/components/footer/footer';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navigation
				navButtons={[
					<NavButton
						key={0}
						size='extra-small'
						text='Tech & Skills'
						href='#Tech&SkillsSection'
					/>,
					<NavButton
						key={1}
						size='extra-small'
						text='Projects'
						href='#ProjectsSection'
					/>,
				]}
			/>

			<Component {...pageProps} />

			<Footer />
		</>
	);
}
