import RevealAnimation from '@/utilities/reveal-animation';
import styles from './index.module.scss';
import ContentSection from '@/components/content-section/content-section';

export default function Index(props: any, rootMainRef: any) {
	return (
		<main id='root-main'>
			{/* Intro section */}
			<ContentSection id='IntroSection'>
				<div className={`${styles['index-title']}`}>
					<RevealAnimation>
						<h1>Hi, I'm Gabriel.</h1>
						<h4>Developer & designer.</h4>
					</RevealAnimation>
				</div>
			</ContentSection>

			{/* About me section */}
			<ContentSection id='AboutMeSession'>
				<div className={`${styles['index-title']}`}>
					<RevealAnimation>
						<h1>About me.</h1>
						<h4>Developer & designer.</h4>
					</RevealAnimation>
				</div>
			</ContentSection>

			{/* Projects section */}
			<ContentSection id='ProjectsSection'>
				<div className={`${styles['index-title']}`}>
					<RevealAnimation>
						<h1>Projects.</h1>
						<h4>Developer & designer.</h4>
					</RevealAnimation>
				</div>
			</ContentSection>
		</main>
	);
}
