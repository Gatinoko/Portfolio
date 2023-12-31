import React, { PropsWithChildren } from 'react';

/**
 * Custom type declaration for the `PageSection` React component properties.
 */
export type PageSectionProps = {
	id: string;
	className?: string;
} & PropsWithChildren;

/**
 * React component.
 *
 * @param {PageSectionProps} props - Component properties.
 */
export function PageSection({
	children,
	id,
	className = '',
}: PageSectionProps) {
	return (
		<section
			id={id}
			className={`page-section ${className}`}>
			{children}
		</section>
	);
}
