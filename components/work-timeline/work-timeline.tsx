import { cva } from 'class-variance-authority';
import React, { PropsWithChildren, ReactElement } from 'react';
import TimelineItem, { TimelineItemProps } from './timeline-item/timeline-item';

interface WorkTimelineProps {
	className?: string;
	workTimelineItems:
		| ReactElement<TimelineItemProps>[]
		| ReactElement<TimelineItemProps>;
}

export default function WorkTimeline(props: WorkTimelineProps) {
	const { className = '', workTimelineItems } = props;

	return <ul className={`${className} work-timeline`}>{workTimelineItems}</ul>;
}
