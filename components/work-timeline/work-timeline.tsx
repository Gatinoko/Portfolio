import React, { ReactElement } from 'react';
import { TimelineItemProps } from './timeline-item/timeline-item';

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
