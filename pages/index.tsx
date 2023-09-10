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
				className={'index-title'}>
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

				<RevealAnimation>
					<h1>Gabriel.</h1>
					<h4>Developer & designer.</h4>
					<h6>
						Career statement goes here. Should be something like really
						impactful. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Morbi non sapien ante. Suspendisse vel consectetur urna. Ut a dictum
						sem. Praesent faucibus nisi ac fermentum posuere.
					</h6>
				</RevealAnimation>
			</PageSection>

			{/* About me section */}
			<PageSection
				id='Tech&SkillsSection'
				className={'information-page'}>
				<h2>Tech & Skills.</h2>
				<hr />
				<ChipCloud
					itemArray={[
						{ text: 'TypeScript', weight: 5 },
						{ text: 'Node', weight: 3 },
						{ text: 'Angular', weight: 5 },
						{ text: 'MySQL', weight: 1 },
						{ text: 'GIT', weight: 4 },
						{ text: 'CSS', weight: 5 },
						{ text: 'Storybook', weight: 4 },
						{ text: 'Java', weight: 3 },
						{ text: 'Python', weight: 2 },
						{ text: 'Spring', weight: 3 },
						{ text: 'MongoDB', weight: 3 },
						{ text: 'JavaScript', weight: 5 },
						{ text: 'Oracle SQL', weight: 1 },
						{ text: 'JWT', weight: 3 },
						{ text: 'Prettier', weight: 3 },
						{ text: 'ESLint', weight: 3 },
						{ text: 'Nodemon', weight: 3 },
						{ text: 'Sass', weight: 5 },
						{ text: 'GitHub', weight: 4 },
						{ text: 'Next.js', weight: 5 },
						{ text: 'Class Authority Variance', weight: 3 },
						{ text: 'React', weight: 5 },
						{ text: 'GraphQL', weight: 2 },
						{ text: 'HTML', weight: 5 },
						{ text: 'Lodash', weight: 1 },
						{ text: 'Jira', weight: 4 },
						{ text: 'Jenkins', weight: 2 },
						{ text: 'Express.js', weight: 3 },
						{ text: 'CSHARP', weight: 4 },
						{ text: 'XML', weight: 2 },
						{ text: 'JSON', weight: 4 },
						{ text: 'Figma', weight: 5 },
						{ text: 'Adobe Photoshop', weight: 5 },
						{ text: 'Adobe Premiere', weight: 4 },
					]}
					size={'auto'}
				/>
			</PageSection>

			{/* Projects section */}
			<PageSection
				id='ProjectsSection'
				className={'index-title'}>
				<RevealAnimation>
					<h1>Projecasdfasdfsdfts.</h1>
					<h4>Developer & designer.</h4>
				</RevealAnimation>
			</PageSection>
		</main>
	);
}
