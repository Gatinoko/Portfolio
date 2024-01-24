import { BannerArt } from '@/components/banner-art/banner-art';
import { ChipCloud } from '@/components/chip-cloud/chip-cloud';
import { Chip } from '@/components/chip-cloud/chip/chip';
import { ColumnGrid } from '@/components/column-grid/column-grid';
import { Icon } from '@/components/icon/icon';
import { PageSection } from '@/components/page-section/page-section';
import { ProjectBox } from '@/components/project-box/project-box';
import { ProjectItem } from '@/components/project-box/project-item/project-item';
import { TimelineItem } from '@/components/work-timeline/timeline-item/timeline-item';
import { TimelineSubitem } from '@/components/work-timeline/timeline-subitem/timeline-subitem';
import { WorkTimeline } from '@/components/work-timeline/work-timeline';
import RevealAnimation from '@/utilities/reveal-animation';

export default function Home() {
	return (
		<main
			className={'main'}
			id='root-main'>
			<div className='page-banner'>
				{/* Interactive banner section */}
				<BannerArt />

				{/* Intro section */}
				<PageSection
					id='IntroSection'
					className='intro-section'>
					<h1
						style={{ width: '6ch' }}
						className='h-2xl'>
						Gabriel Tinoco
					</h1>
					<h2
						style={{ maxWidth: '20ch' }}
						className='h-r'>
						Software Engineer & Designer
					</h2>
					<hr data-variant='animated-gradient' />
					<p style={{ maxWidth: '75ch' }}>
						Career statement goes here. Should be something like really
						impactful. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Morbi non sapien ante. Suspendisse vel consectetur urna. Ut a dictum
						sem. Praesent faucibus nisi ac fermentum posuere.
					</p>
				</PageSection>
			</div>

			<div className='page-content'>
				{/* Tech & skills section */}
				<RevealAnimation>
					<PageSection id='Tech&SkillsSection'>
						<h3 className='section-title h-l'>Tech & Skills</h3>
						<hr data-variant='solid-gradient' />
						<ChipCloud>
							<Chip size='extra-large'>Typescript</Chip>
							<Chip size='regular'>Node.js</Chip>
							<Chip size='large'>Angular</Chip>
							<Chip size='regular'>MySQL</Chip>
							<Chip size='large'>GIT</Chip>
							<Chip size='extra-large'>CSS</Chip>
							<Chip size='large'>Storybook</Chip>
							<Chip size='small'>Java</Chip>
							<Chip size='extra-small'>Python</Chip>
							<Chip size='extra-large'>React</Chip>
							<Chip size='extra-small'>GraphQL</Chip>
							<Chip size='extra-large'>GitHub</Chip>
							<Chip size='small'>Spring</Chip>
							<Chip size='regular'>MongoDB</Chip>
							<Chip size='large'>JavaScript</Chip>
							<Chip size='small'>Oracle SQL</Chip>
							<Chip size='large'>JWT</Chip>
							<Chip size='regular'>Prettier</Chip>
							<Chip size='large'>NextUI</Chip>
							<Chip size='small'>ESLint</Chip>
							<Chip size='extra-large'>Sass</Chip>
							<Chip size='extra-large'>Next.js</Chip>
							<Chip size='regular'>CVA</Chip>
							<Chip size='extra-large'>HTML</Chip>
							<Chip size='large'>Jira</Chip>
							<Chip size='regular'>Express.js</Chip>
							<Chip size='extra-small'>CSHARP</Chip>
							<Chip size='small'>XML</Chip>
							<Chip size='large'>JSON</Chip>
							<Chip size='small'>Passport.js</Chip>
							<Chip size='regular'>Adobe Premiere</Chip>
							<Chip size='extra-large'>Prisma</Chip>
							<Chip size='regular'>Vercel</Chip>
							<Chip size='regular'>AWS</Chip>
							<Chip size='extra-large'>Figma</Chip>
							<Chip size='small'>Planetscale</Chip>
							<Chip size='large'>Tailwindcss</Chip>
							<Chip size='extra-large'>Adobe Photoshop</Chip>
							<Chip size='regular'>Zod</Chip>
						</ChipCloud>
					</PageSection>
				</RevealAnimation>

				{/* Timeline section */}
				<RevealAnimation>
					<PageSection id='TimelineSection'>
						<h3 className='section-title h-l'>Timeline</h3>
						<hr />
						<WorkTimeline>
							<TimelineItem
								key='whimtach'
								title={'WHIMTACH'}
								date={'(6 months)'}>
								<TimelineSubitem
									key={'ux designer'}
									startDate={'Feb 2022'}
									endDate={'May 2022'}
									subtitle={'UX Designer'}
									icons={[
										<Icon
											key={'photoshop'}
											name={'photoshop'}
											size={'small'}
										/>,
										<Icon
											key={'figma'}
											name={'figma'}
											size={'small'}
										/>,
									]}>
									Acted as the lead UX designer in the elaboration of a cosmetic
									business’s website, creating multiple page designs in Figma
									and conceptual designs in Photoshop, as well as having
									biweekly meetings with the project’s stakeholders in order to
									gather feedback and discuss requirements
								</TimelineSubitem>
							</TimelineItem>

							<TimelineItem
								key='RBC (Royal Bank of Canada)'
								date={'(1 year)'}
								title={'RBC (Royal Bank of Canada)'}>
								<TimelineSubitem
									key={'Full-stack Developer Co-op'}
									startDate={'May 2022'}
									endDate={'Ago 2022'}
									subtitle={'Full-stack Developer Co-op'}
									icons={[
										<Icon
											key={'nodejs'}
											name={'nodejs'}
											size={'small'}
										/>,
										<Icon
											key={'angular'}
											name={'angular'}
											size={'small'}
										/>,
										<Icon
											key={'html5'}
											name={'html5'}
											size={'small'}
										/>,
										<Icon
											key={'css3'}
											name={'css3'}
											size={'small'}
										/>,
										<Icon
											key={'mongodb'}
											name={'mongodb'}
											size={'small'}
										/>,
										<Icon
											key={'express'}
											name={'express'}
											size={'small'}
										/>,
										<Icon
											key={'typescript'}
											name={'typescript'}
											size={'small'}
										/>,
										<Icon
											key={'python'}
											name={'python'}
											size={'small'}
										/>,
										<Icon
											key={'bootstrap'}
											name={'bootstrap'}
											size={'small'}
										/>,
									]}>
									Worked on developing a MEAN stack application for a small team
									of people in order to speed up data gathering and
									visualization
								</TimelineSubitem>
								<TimelineSubitem
									key={'Front-end Developer Co-op'}
									startDate={'Sep 2022'}
									endDate={'Ago 2023'}
									subtitle={'Front-end Developer Co-op'}
									icons={[
										<Icon
											key={'nodejs'}
											name={'nodejs'}
											size={'small'}
										/>,
										<Icon
											key={'angular'}
											name={'angular'}
											size={'small'}
										/>,
										<Icon
											key={'react'}
											name={'react'}
											size={'small'}
										/>,
										<Icon
											key={'html5'}
											name={'html5'}
											size={'small'}
										/>,
										<Icon
											key={'css3'}
											name={'css3'}
											size={'small'}
										/>,
										<Icon
											key={'sass'}
											name={'sass'}
											size={'small'}
										/>,
										<Icon
											key={'storybook'}
											name={'storybook'}
											size={'small'}
										/>,
										<Icon
											key={'nx'}
											name={'nx'}
											size={'small'}
										/>,
										<Icon
											key={'jenkins'}
											name={'jenkins'}
											size={'small'}
										/>,
										<Icon
											key={'jest'}
											name={'jest'}
											size={'small'}
										/>,
										<Icon
											key={'figma'}
											name={'figma'}
											size={'small'}
										/>,
									]}>
									Implemented, tested, and reviewed Angular/React components at
									the company main front-end component library team
								</TimelineSubitem>
							</TimelineItem>
						</WorkTimeline>
					</PageSection>
				</RevealAnimation>

				{/* Projects section */}
				<RevealAnimation>
					<PageSection id='ProjectsSection'>
						<h3 className='section-title h-l'>Projects</h3>
						<hr />
						<ProjectBox>
							<ProjectItem
								key={'Bracketeams Tournament Website'}
								githubProjectLink='https://github.com/Gatinoko/bracketeamsProject'
								title='Bracketeams Tournament Website'
								icons={[
									<Icon
										key={'projectItemIcon-1'}
										name={'nodejs'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-2'}
										name={'angular'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-3'}
										name={'html5'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-4'}
										name={'css3'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-5'}
										name={'mongodb'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-6'}
										name={'express'}
										size={'small'}
									/>,
								]}>
								Collaborated in a group of 6 people as a lead software engineer
								in order to create a functional brackets website, where the user
								could create, read, edit, and delete game tournaments
							</ProjectItem>
							<ProjectItem
								key={'Personal Website'}
								title='Personal Website'
								githubProjectLink='https://github.com/Gatinoko/GabrielTinocoWebsite'
								icons={[
									<Icon
										key={'projectItemIcon-1'}
										name={'nodejs'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-2'}
										name={'html5'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-3'}
										name={'css3'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-4'}
										name={'mongodb'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-5'}
										name={'express'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-6'}
										name={'ejs'}
										size={'small'}
									/>,
								]}>
								Created a website with information about my projects, services,
								contact information, and a login page
							</ProjectItem>
							<ProjectItem
								key={'Mockup Music Player'}
								title='Mockup Music Player'
								githubProjectLink='https://github.com/Gatinoko/COMP123-Assignment4'
								icons={[
									<Icon
										key={'projectItemIcon-1'}
										name={'nodejs'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-2'}
										name={'angular'}
										size={'small'}
									/>,
								]}>
								Implemented the following features: add and delete artists,
								assign music to specific artists, edit music information, delete
								music, and play the user’s selected music
							</ProjectItem>
						</ProjectBox>
					</PageSection>
				</RevealAnimation>
			</div>
		</main>
	);
}
