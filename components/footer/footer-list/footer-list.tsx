import Link from 'next/link';
import { ReactElement } from 'react';

/**
 * Custom type declaration for the `FooterListProps` React component properties.
 */
type FooterListProps = {
	className?: string;
	headerText: string;
	children: ReactElement<typeof Link> | ReactElement<typeof Link>[];
};

/**
 * React component.
 *
 * @param {FooterListProps} props - Component properties.
 */
export function FooterList(props: FooterListProps) {
	let { className = '', children, headerText } = props;

	return (
		<div className={`footer-list ${className}`}>
			{/* Header */}
			<p className='header'>{headerText}</p>

			<hr data-variant='solid-small' />

			{/* List */}
			<div className='list'>{children}</div>
		</div>
	);
}
