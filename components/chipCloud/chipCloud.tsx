import { cva } from 'class-variance-authority';
import React from 'react';
import Chip, { ChipSizes } from '../chip/chip';

export type ChipCloudSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

interface IChipCloud {
	itemArray: {
		key?: string | number;
		text: string;
		weight: number;
		link?: string;
	}[];
	size: ChipCloudSizes;
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

export default function ChipCloud(props: IChipCloud) {
	const { itemArray, size, className = '' } = props;

	function assignChipSize(itemWeight: number): ChipSizes {
		switch (itemWeight) {
			case 1:
				return 'extra-small' as ChipSizes;
			case 2:
				return 'small' as ChipSizes;
			case 3:
				return 'regular' as ChipSizes;
			case 4:
				return 'large' as ChipSizes;
			case 5:
				return 'extra-large' as ChipSizes;
			default:
				return 'regular' as ChipSizes;
		}
	}

	return (
		<ul
			role='navigation'
			aria-label='Tag cloud'
			className={`${chipCloud({ size })} ${className}`}>
			{itemArray.map((item) => (
				<li key={item.key}>
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
