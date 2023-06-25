import styles from './nav-button.module.scss';

type Props = {
	text: string;
	href: string;
};

export default function NavButton({ text, href }: Props) {
	return (
		<>
			<a
				className={styles['nav-button']}
				href={href}>
				<span className={styles['nav-button-text']}>{text}</span>
			</a>
		</>
	);
}
