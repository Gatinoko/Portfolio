import { cva } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

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
	type?: 'static' | 'interactive';
	id?: any;
	link?: string;
	className?: string;
	children: string;
};

/**
 * React component to-be used inside the `ChipCloud` component or by itself.
 *
 * @param {ChipProps} props - Component properties.
 */
export default function Chip(props: ChipProps) {
	const {
		id,
		children,
		size = 'regular',
		link,
		type = 'static',
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
			type: {
				interactive: 'interactive',
				static: 'static',
			},
		},
		defaultVariants: {
			size: 'regular',
			type: 'static',
		},
	});

	return (
		<>
			{'link' in props ? (
				<a
					id={id}
					className={`${chip({ size, type })} ${className}`}
					href={link}>
					{children}
				</a>
			) : (
				<p
					id={id}
					className={`${chip({ size, type })} ${className}`}>
					{children}
				</p>
			)}
		</>
	);
}
