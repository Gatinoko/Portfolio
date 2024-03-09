'use client';

import { BannerArt } from '@/components/banner-art/banner-art';
import { Button } from '@/components/button/button';
import { ChipCloud } from '@/components/chip-cloud/chip-cloud';
import { Chip } from '@/components/chip-cloud/chip/chip';
import { Icon } from '@/components/icon/icon';
import { PageSection } from '@/components/page-section/page-section';
import { ProjectBox } from '@/components/project-box/project-box';
import { ProjectItem } from '@/components/project-box/project-item/project-item';
import { Tooltip } from '@/components/tooltip/tooltip';
import { TimelineItem } from '@/components/work-timeline/timeline-item/timeline-item';
import { TimelineSubitem } from '@/components/work-timeline/timeline-subitem/timeline-subitem';
import { WorkTimeline } from '@/components/work-timeline/work-timeline';
import RevealAnimation from '@/utilities/reveal-animation';

export default function Home() {
	// Opens specified link in a new tab
	function openUrlInNewTab(url: string) {
		window.open(url, '_blank')?.focus();
	}

	return (
		<main
			className={'main'}
			id='root-main'>
			<div className='page-banner'>
				{/* Interactive banner section */}
				<BannerArt />

				{/* Intro section */}
				<RevealAnimation>
					<PageSection
						id='IntroSection'
						className='intro-section'>
						<h1
							style={{ width: '6ch' }}
							className='h-xl'>
							Gabriel Dias Tinoco
						</h1>
						<h2
							style={{ maxWidth: '20ch' }}
							className='h-r'>
							Software Engineer
						</h2>
						<hr data-variant='animated-gradient' />
						<p style={{ maxWidth: '75ch' }}>
							Skilled software engineer proficient in different languages and
							frameworks. Experienced in full-stack development, adept at
							problem-solving, and dedicated to the art of crafting high-quality
							code.
						</p>
					</PageSection>
				</RevealAnimation>
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

				{/* Work timeline section */}
				<RevealAnimation>
					<PageSection id='CareerTimelineSection'>
						<h3 className='section-title h-l'>Career</h3>
						<hr />
						<WorkTimeline>
							<TimelineItem
								key='WHIMTACH'
								title={'WHIMTACH'}
								date={'(4 months)'}>
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
									business&apos;s website, creating multiple page designs in
									Figma and conceptual designs in Photoshop, as well as having
									biweekly meetings with the project&apos;s stakeholders in
									order to gather feedback and discuss requirements.
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
									Worked on prototyping and developing a MEAN stack application
									for a small team of individuals in order to speed up data
									gathering and visualization.
								</TimelineSubitem>
								<TimelineSubitem
									key={'Front-end Developer Co-op 1'}
									startDate={'Sep 2022'}
									endDate={'Dec 2022'}
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
									Implemented, tested, reviewed, and shipped{' '}
									<strong>Angular</strong> components as part of the core
									front-end component library team within the company.
								</TimelineSubitem>
								<TimelineSubitem
									key={'Front-end Developer Co-op 2'}
									startDate={'May 2023'}
									endDate={'Ago 2023'}
									subtitle={'Front-end Developer Co-op'}
									icons={[
										<Icon
											key={'nodejs'}
											name={'nodejs'}
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
									Implemented, tested, reviewed, and shipped{' '}
									<strong>React</strong> components as part of the core
									front-end component library team within the company.
								</TimelineSubitem>
							</TimelineItem>
						</WorkTimeline>
					</PageSection>
				</RevealAnimation>

				{/* Education timeline section */}
				<RevealAnimation>
					<PageSection id='EducationTimelineSection'>
						<h3 className='section-title h-l'>Education</h3>
						<hr />
						<WorkTimeline>
							<TimelineItem
								key='Santa Maria Nova Suiça'
								title={'Santa Maria Nova Suiça'}
								date={'(3 years)'}>
								<TimelineSubitem
									key={'High School'}
									startDate={'Jan 2017'}
									endDate={'Dec 2019'}
									subtitle={'High School, Brazil'}>
									Successfully completed high school.
								</TimelineSubitem>
							</TimelineItem>
							<TimelineItem
								key='Centennial College'
								title={'Centennial College'}
								date={'(3 years)'}>
								<TimelineSubitem
									key={'Computer Software Engineering, Canada'}
									startDate={'Jan 2020'}
									endDate={'Dec 2023'}
									subtitle={'Computer Software Engineering, Canada'}>
									Attained an <strong>Ontario College Advanced Diploma</strong>{' '}
									in Computer Software Engineering at Centennial College,
									mastering diverse programming languages and industry-level
									methodologies related to the creation of software at scale.
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
								key={'Serverless Api Form Service'}
								githubProjectLink='https://github.com/Gatinoko/ServerlessApiFormService'
								title='Serverless Api Form Service'
								icons={[
									<Icon
										key={'projectItemIcon-1'}
										name={'nodejs'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-2'}
										name={'typescript'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-3'}
										name={'react'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-4'}
										name={'html5'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-5'}
										name={'css3'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-6'}
										name={'tailwind'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-7'}
										name={'vercel'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-8'}
										name={'mySql'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-9'}
										name={'planetscale'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-10'}
										name={'zod'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-11'}
										name={'prisma'}
										size={'small'}
									/>,
								]}>
								Created an api service, complete with its own front-end portal,
								which lets users programatically create/consume generic units of
								data called form items and business contacts.
							</ProjectItem>
						</ProjectBox>
					</PageSection>
				</RevealAnimation>

				{/* Contact section */}
				<RevealAnimation>
					<PageSection id='ContactSection'>
						<h3 className='section-title h-l'>Contact</h3>
						<hr />
						<p style={{ maxWidth: '75ch', textAlign: 'center' }}>
							Interested in any of my skills? Shoot me an email or a message on
							LinkedIn! I'm a very friendly guy, so coffee chats (even virtual
							ones) are more than welcome.
						</p>
						<div className='contact-buttons'>
							{/*  Copy email button */}
							<Tooltip
								text='Copy email'
								size='extra-small'>
								<Button
									aria-label={'Copy email address'}
									size={'small'}
									icon={
										<Icon
											name={'email'}
											size={'extra-large'}
										/>
									}
								/>
							</Tooltip>

							{/*  LinkedIn profile button */}
							<Tooltip
								text='LinkedIn profile'
								size='extra-small'>
								<Button
									aria-label={'LinkedIn profile'}
									size={'small'}
									onClick={() =>
										openUrlInNewTab(
											'https://www.linkedin.com/in/gabriel-dias-tinoco/'
										)
									}
									icon={
										<Icon
											name={'linkedIn'}
											size={'extra-large'}
										/>
									}
									externalLinkIndicator
								/>
							</Tooltip>

							{/*  Resume link button */}
							<Tooltip
								text='Resume link'
								size='extra-small'>
								<Button
									aria-label={'Resume link'}
									size={'small'}
									onClick={() =>
										openUrlInNewTab(
											'https://www.linkedin.com/in/gabriel-dias-tinoco/'
										)
									}
									icon={
										<Icon
											name={'resume'}
											size={'extra-large'}
										/>
									}
									externalLinkIndicator
								/>
							</Tooltip>
						</div>
					</PageSection>
				</RevealAnimation>
			</div>
		</main>
	);
}
