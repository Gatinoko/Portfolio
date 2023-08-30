import RevealAnimation from '@/utilities/reveal-animation';
import PageSection from '@/components/page-section/page-section';
import Carousel from '@/components/carousel/carousel';
import Image from 'next/image';
import Button, { ButtonSizes } from '@/components/button/button';
import Icon, { IconSizes } from '@/components/icon/icon';

export default function Index(props: any, rootMainRef: any) {
	return (
		<main
			className={'main'}
			id='root-main'>
			{/* Intro section */}
			<PageSection
				id='IntroSection'
				classNames={'index-title'}>
				<Carousel size={'large'}>
					<Image
						alt='image'
						fill={true}
						className={'image'}
						src={'/dog.jpg'}
					/>
					<Image
						alt='image'
						fill={true}
						className={'image'}
						src={'/cat.jpg'}
					/>
				</Carousel>
				<RevealAnimation>
					<h1>Gabriel.</h1>
					<h4>Developer & designer.</h4>
				</RevealAnimation>
			</PageSection>

			{/* About me section */}
			<PageSection
				id='AboutMeSession'
				classNames={'information-page'}>
				<h2>About me.</h2>
				<p>paragraph goes here</p>
			</PageSection>

			{/* Projects section */}
			<PageSection
				id='ProjectsSection'
				classNames={'index-title'}>
				<RevealAnimation>
					<h1>Projecasdfasdfsdfts.</h1>
					<h4>Developer & designer.</h4>
				</RevealAnimation>
			</PageSection>
		</main>
	);
}
