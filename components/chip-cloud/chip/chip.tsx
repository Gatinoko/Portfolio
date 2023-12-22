import { cva } from 'class-variance-authority';
import React from 'react';

export type ChipSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

interface ChipProps {
	text: string;
	size: ChipSizes;
	id?: any;
	link?: string;
	className?: string;
}

const tag = cva('chip', {
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

export default function Chip(props: ChipProps) {
	const { id, text, size, link, className = '' } = props;

	return (
		<>
			{'link' in props ? (
				<a
					id={id}
					className={`${tag({ size })} ${className}`}
					href={link}>
					{text}
				</a>
			) : (
				<p
					id={id}
					className={`${tag({ size })} ${className}`}>
					{text}
				</p>
			)}
		</>
	);
}
