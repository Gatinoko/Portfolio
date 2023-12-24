import { cva } from 'class-variance-authority';
import React from 'react';
import Chip, { ChipSizes } from './chip/chip';

/**
 * Custom type declaration for the `ChipCloud` React component properties.
 */
type ChipCloudProps = {
	chipArray: {
		key?: string | number;
		text: string;
		weight: number;
		link?: string;
	}[];
	size: ChipSizes;
	className?: string;
};

const chipCloud = cva('chipCloud');

/**
 * React component.
 *
 * @param {ChipCloudProps} props - Component properties.
 */
export default function ChipCloud(props: ChipCloudProps) {
	const { chipArray, size, className = '' } = props;

	return (
		<ul
			role='navigation'
			aria-label='Tag cloud'
			className={`${chipCloud({})} ${className}`}>
			{chipArray.map((item, index) => (
				<li key={`chip-${index}`}>
					{'link' in item ? (
						<Chip
							id={item.weight}
							text={item.text}
							size={'regular'}
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
