'use client';

import { ReactElement } from 'react';
import { MobileButtonProps } from './mobile-button/mobile-button';
import { cva } from 'class-variance-authority';

/**
 * Custom type declaration for the `MobileNavigationList` React component properties.
 */
type MobileNavigationListProps = {
	open: boolean;
	setOpen: (value: boolean) => void;
	children: ReactElement<MobileButtonProps>[];
};

/**
 * React component.
 *
 * @param {MobileNavigationListProps} props - Component properties.
 */
export function MobileNavigationList({
	open = false,
	setOpen,
	children,
}: MobileNavigationListProps) {
	// Component CVA function
	const mobileNavigationList = cva('mobile-navigation-list', {
		variants: {
			open: {
				true: 'open',
				false: 'closed',
			},
		},
		defaultVariants: {
			open: false,
		},
	});

	return (
		<ul className={mobileNavigationList({ open })}>
			{/* Overlay background */}
			<div
				className='dark-overlay'
				onClick={() => setOpen(!open)}
			/>

			{/* Buttons */}
			{children.map((mobileButton, index) => (
				<li key={`mobileButton-${index}`}>{mobileButton}</li>
			))}
		</ul>
	);
}
