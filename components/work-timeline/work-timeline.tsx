import React, { PropsWithChildren, ReactElement } from 'react';
import { TimelineItemProps } from './timeline-item/timeline-item';

/**
 * Custom type declaration for the `WorkTimeline` React component properties.
 */
type WorkTimelineProps = {
	className?: string;
	children: ReactElement<TimelineItemProps>[] | ReactElement<TimelineItemProps>;
} & PropsWithChildren;

/**
 * React component.
 *
 * @param {WorkTimelineProps} props - Component properties.
 */
export function WorkTimeline({ className = '', children }: WorkTimelineProps) {
	return <ol className={`${className} work-timeline`}>{children}</ol>;
}
