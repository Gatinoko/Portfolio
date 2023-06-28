import RevealAnimation from '@/utilities/reveal-animation';
import styles from './index.module.scss';
import ContentSection from '@/components/navigation/content-section/content-section';

export default function Index(props: any, rootMainRef: any) {
	return (
		<main id='root-main'>
			<ContentSection>
				<div
					id='IntroSection'
					className={`${styles['index-title']}`}>
					<RevealAnimation>
						<h1>Hi, I'm Gabriel.</h1>
						<h4>Developer & designer.</h4>
					</RevealAnimation>
				</div>
			</ContentSection>
			<ContentSection>
				<div
					id='AboutMeSession'
					className={`${styles['index-title']}`}>
					<RevealAnimation>
						<h1>About me.</h1>
						<h4>Developer & designer.</h4>
					</RevealAnimation>
				</div>
			</ContentSection>
			<ContentSection>
				<div
					id='ProjectsSection'
					className={`${styles['index-title']}`}>
					<RevealAnimation>
						<h1>Projects.</h1>
						<h4>Developer & designer.</h4>
					</RevealAnimation>
				</div>
			</ContentSection>
		</main>
	);
}
