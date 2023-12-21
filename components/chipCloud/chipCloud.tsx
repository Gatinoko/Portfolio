import { cva } from 'class-variance-authority';
import React from 'react';
import Chip, { ChipSizes } from './chip/chip';

interface ChipCloudProps {
	itemArray: {
		key?: string | number;
		text: string;
		weight: number;
		link?: string;
	}[];
	size: ChipSizes;
	className?: string;
}

const chipCloud = cva('chipCloud', {
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

export default function ChipCloud(props: ChipCloudProps) {
	const { itemArray, size, className = '' } = props;

	return (
		<ul
			role='navigation'
			aria-label='Tag cloud'
			className={`${chipCloud({ size })} ${className}`}>
			{itemArray.map((item, index) => (
				<li key={`chip-${index}`}>
					{Object.hasOwnProperty.call(item, 'link') ? (
						<Chip
							id={item.weight}
							text={item.text}
							size='regular'
							link={item.link}
						/>
					) : (
						<Chip
							id={item.weight}
							text={item.text}
							size='regular'
						/>
					)}
				</li>
			))}
		</ul>
	);
}
