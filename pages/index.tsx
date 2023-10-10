import RevealAnimation from '@/utilities/reveal-animation';
import PageSection from '@/components/page-section/page-section';
import Carousel from '@/components/carousel/carousel';
import Image from 'next/image';
import Button, { ButtonSizes } from '@/components/button/button';
import Icon, { IconSizes } from '@/components/icon/icon';
import Chip from '@/components/chipCloud/chip/chip';
import ChipCloud from '@/components/chipCloud/chipCloud';
import WorkTimeline from '@/components/work-timeline/work-timeline';
import TimelineItem from '@/components/work-timeline/timeline-item/timeline-item';
import ProjectItem from '@/components/project-box/project-item/project-item';
import ProjectBox from '@/components/project-box/project-box';
import TimelineSubitem from '@/components/work-timeline/timeline-subitem/timeline-subitem';

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
					<h1 style={{ width: '6ch' }}>Gabriel Tinoco.</h1>
					<h4>Software Engineer & Designer</h4>
					<hr />
					<p>
						Career statement goes here. Should be something like really
						impactful. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Morbi non sapien ante. Suspendisse vel consectetur urna. Ut a dictum
						sem. Praesent faucibus nisi ac fermentum posuere.
					</p>
				</PageSection>
			</RevealAnimation>

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
						{ text: 'CVA', weight: 3 },
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

			{/* Timeline section */}
			<RevealAnimation>
				<PageSection
					id='TimelineSection'
					className={'information-page'}>
					<h2>Timeline</h2>
					<hr />
					<WorkTimeline
						workTimelineItems={[
							<TimelineItem
								key='first'
								title={'WHIMTACH'}
								startDate={'(6 months)'}
								subitemArray={[
									<TimelineSubitem
										key={'sub1'}
										startDate={'Feb 2022'}
										endDate={'May 2022'}
										subtitle={'UX Designer'}
										description={`Acted as the lead UX designer in the elaboration of a cosmetic business’s website, creating multiple
											page designs in Figma and conceptual designs in Photoshop, as well as having biweekly meetings with
											the project’s stakeholders in order to gather feedback and discuss requirements`}
										icons={['/cat.jpg', '/cat.jpg', '/cat.jpg']}
									/>,
								]}
							/>,
							<TimelineItem
								key='first'
								startDate={'(1 year)'}
								title={'RBC (Royal Bank of Canada)'}
								subitemArray={[
									<TimelineSubitem
										startDate={'May 2022'}
										endDate={'Ago 2022'}
										key={'sub1'}
										subtitle={'Full-stack Developer Co-op'}
										description={`Worked on developing a MEAN stack application for a small team of people in order to speed up data gathering and visualization`}
										icons={['/cat.jpg', '/cat.jpg', '/cat.jpg']}
									/>,
									<TimelineSubitem
										key={'sub1'}
										startDate={'Sep 2022'}
										endDate={'Ago 2023'}
										subtitle={'Front-end Developer Co-op'}
										description={`Implemented, tested, and reviewed Angular/React components at the company's main front-end component library team`}
										icons={['/cat.jpg', '/cat.jpg', '/cat.jpg']}
									/>,
								]}
							/>,
						]}
					/>
					{/* <TimelineItem
				startDate={'Feb 2022'}
				endDate={'May 2022'}
				title={'WHIMTACH'}
				description={
					'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription'
				}
				icons={['/cat.jpg', '/cat.jpg', '/cat.jpg']}
			/> */}
				</PageSection>
			</RevealAnimation>

			{/* Projects section */}
			<RevealAnimation>
				<PageSection
					id='ProjectsSection'
					className={'information-page'}>
					<h2>Projects</h2>
					<hr />
					<ProjectBox
						projectBoxItems={[
							<ProjectItem
								key={'laksjd'}
								coverImage={'/cat.jpg'}
								title='Bracketeams Tournament Website'
								description={`Collaborated in a group of 6 people as a lead software engineer in order to create a functional brackets
							website, where the user could create, read, edit, and delete game tournaments`}
								icons={[
									<Icon
										key={'1'}
										name={'nodejs'}
										size={'small'}
									/>,
									<Icon
										key={'1'}
										name={'angular'}
										size={'small'}
									/>,
									<Icon
										key={'1'}
										name={'html5'}
										size={'small'}
									/>,
									<Icon
										key={'1'}
										name={'css3'}
										size={'small'}
									/>,
									<Icon
										key={'1'}
										name={'mongodb'}
										size={'small'}
									/>,
									<Icon
										key={'1'}
										name={'express'}
										size={'small'}
									/>,
									<Icon
										key={'1'}
										name={'ejs'}
										size={'small'}
									/>,
								]}
							/>,
							// <ProjectItem
							// 	key={'laksjd'}
							// 	icon={'/cat.jpg'}
							// 	title='Mockup Music Player'
							// 	description={`Implemented the following features: add and delete artists, assign music to specific artists, edit music
							// 	information, delete music, and play the user’s selected music`}
							// />,
							// <ProjectItem
							// 	key={'laksjd'}
							// 	icon={'/cat.jpg'}
							// 	title='Personal Website'
							// 	description={`Created a website with information about my projects, services, contact information, and a login page`}
							// />,
						]}></ProjectBox>
				</PageSection>
			</RevealAnimation>
		</main>
	);
}
