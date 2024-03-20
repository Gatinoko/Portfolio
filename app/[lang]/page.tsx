import { BannerArt } from '@/components/banner-art/banner-art';
import { ChipCloud } from '@/components/chip-cloud/chip-cloud';
import { Chip } from '@/components/chip-cloud/chip/chip';
import { Icon } from '@/components/icon/icon';
import { PageSection } from '@/components/page-section/page-section';
import { ProjectBox } from '@/components/project-box/project-box';
import { ProjectItem } from '@/components/project-box/project-item/project-item';
import { TimelineItem } from '@/components/timeline/timeline-item/timeline-item';
import { TimelineSubitem } from '@/components/timeline/timeline-subitem/timeline-subitem';
import { Timeline } from '@/components/timeline/timeline';
import RevealAnimation from '@/utilities/reveal-animation';
import { ContactButtons } from '@/components/contact-buttons/contact-buttons';
import { getDictionary } from '@/i18n/get-dictionary';
import { Locale } from '@/i18n/i18nConfig';

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);

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
							{dictionary['page'].introSection.subtitle}
						</h2>
						<hr data-variant='animated-gradient' />
						<p style={{ maxWidth: '75ch' }}>
							{dictionary['page'].introSection.text}
						</p>
					</PageSection>
				</RevealAnimation>
			</div>

			<div className='page-content'>
				{/* Tech & skills section */}
				<RevealAnimation>
					<PageSection id='Tech&SkillsSection'>
						<h3 className='section-title h-l'>
							{dictionary['page']['tech&SkillsSection'].title}
						</h3>
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
							<Chip size='extra-large'>SCSS</Chip>
							<Chip size='extra-large'>Next.js</Chip>
							<Chip size='regular'>CVA</Chip>
							<Chip size='extra-large'>HTML</Chip>
							<Chip size='large'>Jira</Chip>
							<Chip size='regular'>Express.js</Chip>
							<Chip size='large'>Vim</Chip>
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

				{/* Career timeline section */}
				<RevealAnimation>
					<PageSection id='CareerTimelineSection'>
						<h3 className='section-title h-l'>
							{dictionary['page'].careerTimelineSection.title}
						</h3>
						<hr />
						<Timeline>
							<TimelineItem
								key='WHIMTACH'
								title={'WHIMTACH'}
								date={dictionary['page'].careerTimelineSection.whimtach.date}>
								<TimelineSubitem
									key={'ux designer'}
									startDate={
										dictionary['page'].careerTimelineSection.whimtach.uxDesigner
											.startDate
									}
									endDate={
										dictionary['page'].careerTimelineSection.whimtach.uxDesigner
											.endDate
									}
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
									{
										dictionary['page'].careerTimelineSection.whimtach.uxDesigner
											.text
									}
								</TimelineSubitem>
							</TimelineItem>

							<TimelineItem
								key='RBC (Royal Bank of Canada)'
								date={dictionary['page'].careerTimelineSection.rbc.date}
								title={'RBC (Royal Bank of Canada)'}>
								<TimelineSubitem
									key={'Full-stack Developer Co-op'}
									startDate={
										dictionary['page'].careerTimelineSection.rbc.fullStack
											.startDate
									}
									endDate={
										dictionary['page'].careerTimelineSection.rbc.fullStack
											.endDate
									}
									subtitle={
										dictionary['page'].careerTimelineSection.rbc.fullStack
											.subtitle
									}
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
									{dictionary['page'].careerTimelineSection.rbc.fullStack.text}
								</TimelineSubitem>
								<TimelineSubitem
									key={'Front-end Developer Co-op'}
									startDate={
										dictionary['page'].careerTimelineSection.rbc.frontEnd1
											.startDate
									}
									endDate={
										dictionary['page'].careerTimelineSection.rbc.frontEnd1
											.endDate
									}
									subtitle={
										dictionary['page'].careerTimelineSection.rbc.frontEnd1
											.subtitle
									}
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
									{dictionary['page'].careerTimelineSection.rbc.frontEnd1.text}
								</TimelineSubitem>
								<TimelineSubitem
									key={'Front-end Developer Co-op 2'}
									startDate={
										dictionary['page'].careerTimelineSection.rbc.frontEnd2
											.startDate
									}
									endDate={
										dictionary['page'].careerTimelineSection.rbc.frontEnd2
											.endDate
									}
									subtitle={
										dictionary['page'].careerTimelineSection.rbc.frontEnd2
											.subtitle
									}
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
									{dictionary['page'].careerTimelineSection.rbc.frontEnd2.text}
								</TimelineSubitem>
							</TimelineItem>
						</Timeline>
					</PageSection>
				</RevealAnimation>

				{/* Education timeline section */}
				<RevealAnimation>
					<PageSection id='EducationTimelineSection'>
						<h3 className='section-title h-l'>
							{dictionary['page'].educationTimelineSection.title}
						</h3>
						<hr />
						<Timeline>
							<TimelineItem
								key='Santa Maria Nova Suiça'
								title={'Santa Maria Nova Suiça'}
								date={
									dictionary['page'].educationTimelineSection.santaMaria.date
								}>
								<TimelineSubitem
									key={'High School'}
									startDate={
										dictionary['page'].educationTimelineSection.santaMaria
											.startDate
									}
									endDate={
										dictionary['page'].educationTimelineSection.santaMaria
											.endDate
									}
									subtitle={
										dictionary['page'].educationTimelineSection.santaMaria
											.subtitle
									}>
									{dictionary['page'].educationTimelineSection.santaMaria.text}
								</TimelineSubitem>
							</TimelineItem>
							<TimelineItem
								key='Centennial College'
								title={'Centennial College'}
								date={
									dictionary['page'].educationTimelineSection.centennialCollege
										.date
								}>
								<TimelineSubitem
									key={'Computer Software Engineering, Canada'}
									startDate={
										dictionary['page'].educationTimelineSection
											.centennialCollege.startDate
									}
									endDate={
										dictionary['page'].educationTimelineSection
											.centennialCollege.endDate
									}
									subtitle={
										dictionary['page'].educationTimelineSection
											.centennialCollege.subtitle
									}>
									{
										dictionary['page'].educationTimelineSection
											.centennialCollege.text
									}
								</TimelineSubitem>
							</TimelineItem>
						</Timeline>
					</PageSection>
				</RevealAnimation>

				{/* Projects section */}
				<RevealAnimation>
					<PageSection id='ProjectsSection'>
						<h3 className='section-title h-l'>
							{dictionary['page'].projectsSection.title}
						</h3>
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
										name={'mySql'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-8'}
										name={'nextjs'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-9'}
										name={'zod'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-10'}
										name={'prisma'}
										size={'small'}
									/>,
								]}>
								{
									dictionary['page'].projectsSection.serverlessApiFormService
										.text
								}
							</ProjectItem>
							<ProjectItem
								key={'S3 Dynamodb Videoplayer'}
								githubProjectLink='https://github.com/Gatinoko/S3DynamodbVideoplayer'
								title='S3 Dynamodb Videoplayer'
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
										name={'mySql'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-8'}
										name={'s3'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-9'}
										name={'dynamodb'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-10'}
										name={'nextjs'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-11'}
										name={'zod'}
										size={'small'}
									/>,
									<Icon
										key={'projectItemIcon-12'}
										name={'prisma'}
										size={'small'}
									/>,
								]}>
								{dictionary['page'].projectsSection.s3DynamodbVideoplayer.text}
							</ProjectItem>
						</ProjectBox>
					</PageSection>
				</RevealAnimation>

				{/* Contact section */}
				<RevealAnimation>
					<PageSection id='ContactSection'>
						<h3 className='section-title h-l'>
							{dictionary['page'].contactSection.title}
						</h3>
						<hr />
						<p style={{ maxWidth: '75ch', textAlign: 'center' }}>
							{dictionary['page'].contactSection.text}
						</p>
						<ContactButtons dictionary={dictionary.contactButtons} />
					</PageSection>
				</RevealAnimation>
			</div>
		</main>
	);
}
