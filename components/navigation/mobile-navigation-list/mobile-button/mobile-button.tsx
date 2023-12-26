import { cva } from 'class-variance-authority';

/**
 * Custom type declaration for the different sizes a `MobileButton` component can assume.
 */
export type MobileButtonSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

/**
 * Custom type declaration for the `Navigation` React component properties.
 */
export type MobileButtonProps = {
	text: string;
	size?: MobileButtonSizes;
	href: string;
};

const mobileButton = cva('mobile-button', {
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

/**
 * React component.
 *
 * @param {NavigationProps} props - Component properties.
 */
export default function MobileButton(props: MobileButtonProps) {
	const { text, href, size = 'regular' } = props;

	return (
		<button className={mobileButton({ size })}>
			<span className={'text'}>{text}</span>
		</button>
	);
}
