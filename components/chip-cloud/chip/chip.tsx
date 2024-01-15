'use client';

import { cva } from 'class-variance-authority';
import { ComponentProps } from 'react';

/**
 * Custom type declaration for the different sizes a `Chip` component can assume.
 */
export type ChipSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

/**
 * Custom type declaration for the `Chip` React component properties.
 */
export type ChipProps = {
	size?: ChipSizes;
	interactive?: boolean;
	id?: any;
	link?: string;
	className?: string;
	children: string;
} & ComponentProps<'button'>;

/**
 * React component to-be used inside the `ChipCloud` component or by itself.
 *
 * @param {ChipProps} props - Component properties.
 */
export function Chip(props: ChipProps) {
	const {
		id,
		children,
		size = 'regular',
		link,
		interactive,
		disabled,
		className = '',
	} = props;

	// Component CVA function
	const chip = cva('chip', {
		variants: {
			size: {
				['extra-large']: 'extra-large',
				large: 'large',
				regular: 'regular',
				medium: 'medium',
				small: 'small',
				['extra-small']: 'extra-small',
			},
			interactive: {
				true: 'interactive',
			},
			disabled: {
				true: 'disabled',
			},
		},
		defaultVariants: {
			size: 'regular',
			interactive: false,
			disabled: false,
		},
	});

	return (
		<>
			{'link' in props ? (
				<a
					id={id}
					className={`${chip({ size, interactive, disabled })} ${className}`}
					href={link}>
					{children}
				</a>
			) : (
				<p
					id={id}
					className={`${chip({ size, interactive, disabled })} ${className}`}>
					{children}
				</p>
			)}
		</>
	);
}