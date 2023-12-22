import PageSection from '@/components/page-section/page-section';
import Icon from '@/components/icon/icon';
import ChipCloud from '@/components/chipCloud/chipCloud';
import WorkTimeline from '@/components/work-timeline/work-timeline';
import TimelineItem from '@/components/work-timeline/timeline-item/timeline-item';
import ProjectItem from '@/components/project-box/project-item/project-item';
import ProjectBox from '@/components/project-box/project-box';
import TimelineSubitem from '@/components/work-timeline/timeline-subitem/timeline-subitem';

export default function Index(props: any, rootMainRef: any) {
	return (
		<>
			{/* <ColumnGrid platform={'responsive'} /> */}
			<main
				className={'main'}
				id='root-main'>
				{/* Intro section */}
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

				{/* Tech & skills section */}
				<PageSection
					id='Tech&SkillsSection'
					className={'information-page'}>
					<h3 className='section-title'>Tech & Skills.</h3>
					<hr />
					<ChipCloud
						itemArray={[
							{ text: 'TypeScript', weight: 5 },
							{ text: 'Node.js', weight: 3 },
							{ text: 'Angular', weight: 4 },
							{ text: 'MySQL', weight: 3 },
							{ text: 'GIT', weight: 4 },
							{ text: 'CSS', weight: 5 },
							{ text: 'Storybook', weight: 3 },
							{ text: 'Java', weight: 2 },
							{ text: 'Python', weight: 2 },
							{ text: 'React', weight: 5 },
							{ text: 'GraphQL', weight: 1 },
							{ text: 'GitHub', weight: 5 },
							{ text: 'Spring', weight: 2 },
							{ text: 'MongoDB', weight: 3 },
							{ text: 'JavaScript', weight: 5 },
							{ text: 'Oracle SQL', weight: 1 },
							{ text: 'JWT', weight: 5 },
							{ text: 'Prettier', weight: 3 },
							{ text: 'NextUI', weight: 4 },
							{ text: 'ESLint', weight: 2 },
							{ text: 'Nodemon', weight: 3 },
							{ text: 'Sass', weight: 5 },
							{ text: 'Next.js', weight: 5 },
							{ text: 'CVA', weight: 3 },
							{ text: 'HTML', weight: 5 },
							{ text: 'Jira', weight: 4 },
							{ text: 'Jenkins', weight: 2 },
							{ text: 'Express.js', weight: 3 },
							{ text: 'CSHARP', weight: 1 },
							{ text: 'XML', weight: 2 },
							{ text: 'JSON', weight: 4 },
							{ text: 'Passport.js', weight: 2 },
							{ text: 'Adobe Premiere', weight: 3 },
							{ text: 'Prisma', weight: 4 },
							{ text: 'Vercel', weight: 3 },
							{ text: 'AWS', weight: 3 },
							{ text: 'Figma', weight: 5 },
							{ text: 'Planetscale', weight: 1 },
							{ text: 'Tailwindcss', weight: 4 },
							{ text: 'Adobe Photoshop', weight: 5 },
							{ text: 'Zod', weight: 3 },
						]}
						size='regular'
					/>
				</PageSection>

				{/* Timeline section */}
				<PageSection
					id='TimelineSection'
					className={'information-page'}>
					<h3 className='section-title'>Timeline</h3>
					<hr />
					<WorkTimeline
						workTimelineItems={[
							<TimelineItem
								key='whimtach'
								title={'WHIMTACH'}
								date={'(6 months)'}
								subitemArray={[
									<TimelineSubitem
										key={'ux designer'}
										startDate={'Feb 2022'}
										endDate={'May 2022'}
										subtitle={'UX Designer'}
										description={`Acted as the lead UX designer in the elaboration of a cosmetic business’s website, creating multiple
											page designs in Figma and conceptual designs in Photoshop, as well as having biweekly meetings with
											the project’s stakeholders in order to gather feedback and discuss requirements`}
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
										]}
									/>,
								]}
							/>,
							<TimelineItem
								key='RBC (Royal Bank of Canada)'
								date={'(1 year)'}
								title={'RBC (Royal Bank of Canada)'}
								subitemArray={[
									<TimelineSubitem
										key={'Full-stack Developer Co-op'}
										startDate={'May 2022'}
										endDate={'Ago 2022'}
										subtitle={'Full-stack Developer Co-op'}
										description={`Worked on developing a MEAN stack application for a small team of people in order to speed up data gathering and visualization`}
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
										]}
									/>,
									<TimelineSubitem
										key={'Front-end Developer Co-op'}
										startDate={'Sep 2022'}
										endDate={'Ago 2023'}
										subtitle={'Front-end Developer Co-op'}
										description={`Implemented, tested, and reviewed Angular/React components at the company's main front-end component library team`}
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
										]}
									/>,
								]}
							/>,
						]}
					/>
				</PageSection>

				{/* Projects section */}
				<PageSection
					id='ProjectsSection'
					className={'information-page'}>
					<h3 className='section-title'>Projects</h3>
					<hr />
					<ProjectBox
						projectBoxItems={[
							<ProjectItem
								key={'Bracketeams Tournament Website'}
								githubProjectLink='https://github.com/Gatinoko/bracketeamsProject'
								title='Bracketeams Tournament Website'
								description={`Collaborated in a group of 6 people as a lead software engineer in order to create a functional brackets
							website, where the user could create, read, edit, and delete game tournaments`}
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
								]}
							/>,
							<ProjectItem
								key={'Personal Website'}
								title='Personal Website'
								githubProjectLink='https://github.com/Gatinoko/GabrielTinocoWebsite'
								description={`Created a website with information about my projects, services, contact information, and a login page`}
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
								]}
							/>,
							<ProjectItem
								key={'Mockup Music Player'}
								title='Mockup Music Player'
								githubProjectLink='https://github.com/Gatinoko/COMP123-Assignment4'
								description={`Implemented the following features: add and delete artists, assign music to specific artists, edit music
								information, delete music, and play the user’s selected music`}
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
								]}
							/>,
						]}
					/>
				</PageSection>
			</main>
		</>
	);
}
