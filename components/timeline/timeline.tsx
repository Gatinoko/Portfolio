import React, { PropsWithChildren, ReactElement } from 'react';
import { TimelineItemProps } from './timeline-item/timeline-item';

/**
 * Custom type declaration for the `Timeline` React component properties.
 */
type TimelineProps = {
	className?: string;
	children: ReactElement<TimelineItemProps>[] | ReactElement<TimelineItemProps>;
} & PropsWithChildren;

/**
 * React component.
 *
 * @param {TimelineProps} props - Component properties.
 */
export function Timeline({ className = '', children }: TimelineProps) {
	return <ol className={`${className} timeline`}>{children}</ol>;
}
