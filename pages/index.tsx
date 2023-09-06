import RevealAnimation from '@/utilities/reveal-animation';
import PageSection from '@/components/page-section/page-section';
import Carousel from '@/components/carousel/carousel';
import Image from 'next/image';
import Button, { ButtonSizes } from '@/components/button/button';
import Icon, { IconSizes } from '@/components/icon/icon';
import Chip from '@/components/chip/chip';
import ChipCloud from '@/components/chipCloud/chipCloud';

export default function Index(props: any, rootMainRef: any) {
	return (
		<main
			className={'main'}
			id='root-main'>
			{/* Intro section */}
			<PageSection
				id='IntroSection'
				classNames={'index-title'}>
				{/* <Carousel buttonSize={'auto'}>
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
				</Carousel> */}
				{/* <Chip
					text={'PEEEsssssssssssss'}
					size={'auto'}
					id={''}
				/> */}
				<ChipCloud
					itemArray={[
						{ text: 'TypeScript', weight: 5 },
						{ text: 'NodeJS', weight: 3 },
						{ text: 'React', weight: 5 },
						{ text: 'Angular', weight: 5 },
						{ text: 'MySQL', weight: 1 },
						{ text: 'HTML', weight: 5 },
						{ text: 'GIT', weight: 4 },
						{ text: 'CSS', weight: 5 },
						{ text: 'Storybook', weight: 4 },
						{ text: 'Java', weight: 3 },
						{ text: 'Python', weight: 2 },
						{ text: 'Spring', weight: 3 },
						{ text: 'MongoDB', weight: 3 },
						{ text: 'Oracle SQL', weight: 1 },
						{ text: 'JWT', weight: 3 },
						{ text: 'Prettier', weight: 3 },
						{ text: 'ESLint', weight: 3 },
						{ text: 'Nodemon', weight: 3 },
						{ text: 'Class Authority Variance', weight: 3 },
						{ text: 'JavaScript', weight: 5 },
						{ text: 'Sass', weight: 5 },
					]}
					size={'auto'}
				/>
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
