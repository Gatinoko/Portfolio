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
	externalLinkIndicator?: boolean;
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
		externalLinkIndicator = false,
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
			aria-label={extraProps['aria-label']}
			className={`${className} ${button({ size, variant })}`}
			onClick={buttonClick}
			{...extraProps}>
			{/* External link indicator icon */}
			{externalLinkIndicator && (
				<svg
					className='external-link-indicator'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'>
					<path d='M19,13.5v5c0,3.033-2.467,5.5-5.5,5.5H5.5c-3.033,0-5.5-2.467-5.5-5.5V10.5c0-3.033,2.467-5.5,5.5-5.5h5c.829,0,1.5,.671,1.5,1.5s-.671,1.5-1.5,1.5H5.5c-1.378,0-2.5,1.122-2.5,2.5v8c0,1.378,1.122,2.5,2.5,2.5H13.5c1.378,0,2.5-1.122,2.5-2.5v-5c0-.829,.671-1.5,1.5-1.5s1.5,.671,1.5,1.5ZM20.5,0h-5c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h3.379L8.439,13.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439L21,5.121v3.379c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V3.5c0-1.93-1.57-3.5-3.5-3.5Z' />
				</svg>
			)}

			{/* Prefix icon */}
			{'prefixIcon' in props && props.prefixIcon}

			{/* Text or single icon */}
			{'icon' in props ? props.icon : props.children}

			{/* Suffix icon */}
			{'suffixIcon' in props && props.suffixIcon}
		</button>
	);
}
