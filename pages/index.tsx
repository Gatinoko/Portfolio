import styles from './index.module.scss';

export default function Index() {
	return (
		<>
			<main className={`${styles['index-main']}`}>
				<div className={`${styles['index-title']}`}>
					<h1>Hi, I'm Gabriel.</h1>
					<h4>Developer & designer.</h4>
				</div>
			</main>
		</>
	);
}
