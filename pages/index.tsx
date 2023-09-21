import RevealAnimation from '@/utilities/reveal-animation';
import PageSection from '@/components/page-section/page-section';
import Carousel from '@/components/carousel/carousel';
import Image from 'next/image';
import Button, { ButtonSizes } from '@/components/button/button';
import Icon, { IconSizes } from '@/components/icon/icon';
import Chip from '@/components/chipCloud/chip/chip';
import ChipCloud from '@/components/chipCloud/chipCloud';

export default function Index(props: any, rootMainRef: any) {
	return (
		<main
			className={'main'}
			id='root-main'>
			{/* Intro section */}
			<RevealAnimation>
				<PageSection
					id='IntroSection'
					className={'index-title'}>
					{/* <Button
						size={'extra-large'}
						text='Projects'
						/>
						<Button
						size={'large'}
						text='Projects'
						/>
						<Button
						size={'regular'}
						text='Projects'
						/>
						<Button
						size={'small'}
						text='Projects'
						/>
						<Button
						size={'extra-small'}
						text='Projects'
					/> */}
					<h1 style={{ width: '6ch' }}>Gabriel Tinoco.</h1>
					<h6>Software Engineer & Designer</h6>
					<hr />
					<p data-size='small'>
						Career statement goes here. Should be something like really
						impactful. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Morbi non sapien ante. Suspendisse vel consectetur urna. Ut a dictum
						sem. Praesent faucibus nisi ac fermentum posuere.
					</p>
					{/* <h2>Gabriel Dias Days Tinoco Tinquito.</h2>
					<h3>Gabriel Dias Days Tinoco Tinquito.</h3>
					<h4>Gabriel Dias Days Tinoco Tinquito.</h4>
					<h5>Gabriel Dias Days Tinoco Tinquito.</h5>
				<h6>Gabriel Dias Days Tinoco Tinquito.</h6> */}
					{/* <h4>Developer & designer.</h4>
					<h6>
					Career statement goes here. Should be something like really
					impactful. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Morbi non sapien ante. Suspendisse vel consectetur urna. Ut a dictum
					sem. Praesent faucibus nisi ac fermentum posuere.
				</h6> */}
				</PageSection>
			</RevealAnimation>

			{/* About me section */}
			<PageSection
				id='Tech&SkillsSection'
				className={'information-page'}>
				<h3>Tech & Skills.</h3>
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
					size='regular'
				/>
			</PageSection>

			{/* Projects section */}
			{/* <PageSection
				id='ProjectsSection'
				className={'information-page'}>
				<RevealAnimation>
					<h1>Projecasdfasdfsdfts.</h1>
					<h4>Developer & designer.</h4>
				</RevealAnimation>
			</PageSection> */}
		</main>
	);
}
