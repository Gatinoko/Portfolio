import { cva } from 'class-variance-authority';

export type NavButtonSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

type NavButtonProps = {
	text: string;
	size?: NavButtonSizes;
	href: string;
};

const navButton = cva('nav-button', {
	variants: {
		size: {
			auto: 'auto',
			['extra-large']: 'extra-large',
			large: 'large',
			regular: 'regular',
			medium: 'medium',
			small: 'small',
			['extra-small']: 'extra-small',
		},
	},
	defaultVariants: {
		size: 'auto',
	},
});

export default function NavButton(props: NavButtonProps) {
	const { text, href, size = 'auto' } = props;

	return (
		<>
			<a
				className={navButton({ size })}
				href={href}>
				<span className={'nav-button-text'}>{text}</span>
			</a>
		</>
	);
}
