'use client';

import React, { ReactElement } from 'react';
import { ChipProps } from './chip/chip';

/**
 * Custom type declaration for the `ChipCloud` React component properties.
 */
type ChipCloudProps = {
	className?: string;
	children: ReactElement<ChipProps>[];
};

/**
 * React component.
 *
 * @param {ChipCloudProps} props - Component properties.
 */
export function ChipCloud({ children, className = '' }: ChipCloudProps) {
	return (
		<ul
			role='navigation'
			aria-label='Chip cloud'
			className={`chip-cloud ${className}`}>
			{children.map((chip, index) => (
				<li key={`chipCloud-chip-${index}`}>{chip}</li>
			))}
		</ul>
	);
}
