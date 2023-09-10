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
						key={0}
						text='Tech & Skills'
						href='#Tech&SkillsSection'
					/>,
					<NavButton
						key={1}
						text='Projects'
						href='#ProjectsSection'
					/>,
				]}
			/>

			<Component {...pageProps} />
		</>
	);
}
