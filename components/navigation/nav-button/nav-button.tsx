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
			['extra-large']: 'extra-large',
			large: 'large',
			regular: 'regular',
			medium: 'medium',
			small: 'small',
			['extra-small']: 'extra-small',
		},
	},
	defaultVariants: {
		size: 'regular',
	},
});

export default function NavButton(props: NavButtonProps) {
	const { text, href, size = 'regular' } = props;

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
