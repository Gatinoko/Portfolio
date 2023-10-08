import React, { ReactElement } from 'react';
import TimelineSubitem, {
	TimelineSubitemProps,
} from '../timeline-subitem/timeline-subitem';

export interface TimelineItemProps {
	title: string;
	startDate?: string;
	endDate?: string;
	className?: string;
	subitemArray: ReactElement<TimelineSubitemProps>[];
}

export default function TimelineItem(props: TimelineItemProps) {
	const {
		title = 'Title',
		startDate,
		endDate,
		className = '',
		subitemArray,
	} = props;

	return (
		<li className={`${className} timeline-item`}>
			{/* Separator div */}
			<div className='left-separator' />

			{/* Container with information */}
			<div className='information-container'>
				{/* Item heading */}
				<div className='item-heading'>
					{/* Date */}
					{(startDate || endDate) && (
						<p
							className='date'
							data-size='extra-small'>
							{startDate}
							<br />
							{endDate}
						</p>
					)}

					{/* Item title */}
					<h5 className='title'>{title}</h5>
				</div>

				{/* Timeline subitem container */}
				<div className='subitem-container'>
					{subitemArray.map(({ key, props, type }, index) => (
						<TimelineSubitem
							key={index}
							startDate={props.startDate}
							endDate={props.endDate}
							subtitle={props.subtitle}
							description={props.description}
							icons={props.icons}
						/>
					))}
				</div>
			</div>
		</li>
	);
}
