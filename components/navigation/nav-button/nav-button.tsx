type Props = {
	text: string;
	href: string;
};

export default function NavButton({ text, href }: Props) {
	return (
		<>
			<a
				className={'nav-button'}
				href={href}>
				<span className={'nav-button-text'}>{text}</span>
			</a>
		</>
	);
}
