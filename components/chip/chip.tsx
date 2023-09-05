import { cva } from 'class-variance-authority';
import React from 'react';

export type ChipSizes =
	| 'auto'
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

interface IChip {
	text: string;
	size: ChipSizes;
	id: string;
	classNames?: string;
}

const tag = cva('chip', {
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

export default function Chip(props: IChip) {
	const { text, size, classNames } = props;

	return <p className={`${tag({ size })} ${classNames}`}>{text}</p>;
}
