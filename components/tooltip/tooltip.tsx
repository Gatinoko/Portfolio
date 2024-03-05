import { cva } from 'class-variance-authority';
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

/**
 * Custom type declaration for the different sizes a `Tooltip` component can assume.
 */
export type TooltipSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

/**
 * Custom type declaration for the `Tooltip` React component properties.
 */
export type TooltipProps = {
	text: string;
	size?: TooltipSizes;
	className?: string;
} & PropsWithChildren;

/**
 * React component.
 *
 * @param {TooltipProps} props - Component properties.
 */
export function Tooltip({
	text,
	size,
	className = '',
	children,
}: TooltipProps) {
	// Component CVA function
	const tooltip = cva('tooltip', {
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

	return (
		<div className='tooltip-container'>
			<div
				className={`${className} ${tooltip({ size })}`}
				role='tooltip'>
				<span className='text'>{text}</span>
			</div>
			{children}
		</div>
	);
}
