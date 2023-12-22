import React, { ReactNode } from 'react';

export interface TimelineSubitemProps {
	startDate?: string;
	endDate?: string;
	subtitle: string;
	description: string;
	className?: string;
	icons?: ReactNode[];
}

export default function TimelineSubitem(props: TimelineSubitemProps) {
	const {
		startDate,
		endDate,
		subtitle = 'Subtitle',
		description = 'Description',
		className = '',
		icons,
	} = props;

	return (
		<div className={`${className} timeline-subitem`}>
			{/* Date */}
			<p
				className='date'
				data-size='extra-small'>
				{startDate}
				<br />
				{endDate}
			</p>

			{/* Subtitle */}
			<h6 className='subtitle'>{subtitle}</h6>

			{/* Description */}
			<p className='description'>{description}</p>

			{/* Tech icons */}
			{icons && (
				<div className='icons'>{icons.map((iconNode, index) => iconNode)}</div>
			)}
		</div>
	);
}
