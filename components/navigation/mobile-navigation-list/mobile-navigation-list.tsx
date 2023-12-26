import { PropsWithChildren, ReactElement } from 'react';
import MobileButton, { MobileButtonProps } from './mobile-button/mobile-button';
import { cva } from 'class-variance-authority';

/**
 * Custom type declaration for the `MobileNavigationList` React component properties.
 */
type MobileNavigationListProps = {
	open: boolean;
	children: ReactElement<MobileButtonProps>[];
} & PropsWithChildren;

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

/**
 * React component.
 *
 * @param {NavigationProps} props - Component properties.
 */
export default function MobileNavigationList({
	open,
	children,
}: MobileNavigationListProps) {
	return (
		<ul className={mobileNavigationList({ open })}>
			{children.map((mobileButton) => (
				<MobileButton
					key={mobileButton.key}
					text={mobileButton.props.text}
					href={''}
				/>
			))}
		</ul>
	);
}