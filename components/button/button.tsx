'use client';

import React, { ComponentProps, ReactElement, useState } from 'react';
import { cva } from 'class-variance-authority';
import { IconProps } from '../icon/icon';

/**
 * Custom type declaration for the different sizes a `Button` component can assume.
 */
export type ButtonSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

/**
 * Custom type declaration for the `Button` React component properties.
 */
export type ButtonProps = BaseButton &
	(TextOnlyButton | IconOnlyButton | TextWithIconsButton);

type BaseButton = {
	size?: ButtonSizes;
	variant?: 'default' | 'flat';
	className?: string;
	throttleValue?: number;
	onClick?: () => void;
} & ComponentProps<'button'>;

type TextOnlyButton = {
	children: string;
};

type IconOnlyButton = {
	icon: ReactElement<IconProps>;
};

type TextWithIconsButton = {
	prefixIcon?: ReactElement<IconProps>;
	suffixIcon?: ReactElement<IconProps>;
	children: string;
};

/**
 * React component.
 *
 * @param {ButtonProps} props - Component properties.
 */
export function Button(props: ButtonProps) {
	let {
		size = 'regular',
		variant = 'default',
		className = '',
		onClick = () => {},
		...extraProps
	} = props;

	// Throttle click lock state variable
	const [throttleLock, setThrottleLock] = useState(false);

	// Component CVA function
	const button = cva('button', {
		variants: {
			size: {
				['extra-large']: 'extra-large',
				large: 'large',
				regular: 'regular',
				medium: 'medium',
				small: 'small',
				['extra-small']: 'extra-small',
			},
			variant: {
				default: 'default',
				flat: 'flat',
			},
		},
		defaultVariants: {
			size: 'regular',
			variant: 'default',
		},
	});

	// Function for throttling the click event for a number of ms
	async function throttleClick(throttleValue: number) {
		if (throttleLock) return;
		setThrottleLock(true);
		onClick();
		setTimeout(() => {
			setThrottleLock(false);
		}, throttleValue);
	}

	// Handler function for the click event
	function buttonClick() {
		if (props.throttleValue) {
			const { throttleValue } = props;
			throttleClick(throttleValue);
		} else onClick();
	}

	return (
		<button
			className={`${className} ${button({ size, variant })}`}
			onClick={buttonClick}
			{...extraProps}>
			{/* Prefix icon */}
			{'prefixIcon' in props && props.prefixIcon}

			{/* Text or single icon */}
			{'icon' in props ? props.icon : props.children}

			{/* Suffix icon */}
			{'suffixIcon' in props && props.suffixIcon}
		</button>
	);
}
