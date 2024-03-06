'use client';

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
	size?: MobileButtonSizes;
	children: string;
	onClick?: () => void;
};

/**
 * React component.
 *
 * @param {MobileButtonProps} props - Component properties.
 */
export function MobileButton({
	size = 'regular',
	children,
	onClick = () => {},
}: MobileButtonProps) {
	// Component CVA function
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

	// Handler function for the click event
	function buttonClick() {
		onClick();
	}

	return (
		<button
			className={mobileButton({ size })}
			onClick={buttonClick}>
			<span className={'text'}>{children}</span>
		</button>
	);
}
