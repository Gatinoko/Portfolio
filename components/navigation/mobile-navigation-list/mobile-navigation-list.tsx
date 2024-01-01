import { ReactElement } from 'react';
import MobileButton, { MobileButtonProps } from './mobile-button/mobile-button';
import { cva } from 'class-variance-authority';

/**
 * Custom type declaration for the `MobileNavigationList` React component properties.
 */
type MobileNavigationListProps = {
	open: boolean;
	children: ReactElement<MobileButtonProps>[];
};

/**
 * React component.
 *
 * @param {MobileNavigationListProps} props - Component properties.
 */
export default function MobileNavigationList({
	open = false,
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
			{children.map((mobileButton, index) => (
				<li key={`mobileButton-${index}`}>{mobileButton}</li>
			))}
		</ul>
	);
}
