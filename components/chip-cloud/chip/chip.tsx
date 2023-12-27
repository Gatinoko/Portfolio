import { cva } from 'class-variance-authority';
import React from 'react';

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
	text: string;
	size: ChipSizes;
	type?: 'static' | 'interactive';
	id?: any;
	link?: string;
	className?: string;
};

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

/**
 * React component to-be used inside the `ChipCloud` component or by itself.
 *
 * @param {ChipProps} props - Component properties.
 */
export default function Chip(props: ChipProps) {
	const { id, text, size, link, type, className = '' } = props;

	return (
		<>
			{'link' in props ? (
				<a
					id={id}
					className={`${chip({ size, type })} ${className}`}
					href={link}>
					{text}
				</a>
			) : (
				<p
					id={id}
					className={`${chip({ size, type })} ${className}`}>
					{text}
				</p>
			)}
		</>
	);
}
