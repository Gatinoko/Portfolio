import { cva } from 'class-variance-authority';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export interface TimelineItemProps {
	startDate: string;
	endDate: string;
	title: string;
	description: string;
	className?: string;
	icons?: string[];
}

export default function TimelineItem(props: TimelineItemProps) {
	const {
		startDate = 'Start date',
		endDate = 'End date',
		title = 'Title',
		description = 'Description',
		className = '',
		icons,
	} = props;

	return (
		<li className={`${className} timeline-item`}>
			{/* Date */}
			<p
				className='date'
				data-size='extra-small'>
				{startDate}
				<br />
				{endDate}
			</p>

			{/* Item information container */}
			<div className='item-information-container'>
				{/* Item title */}
				<h6 className='title'>{title}</h6>

				{/* Item description */}
				<p
					className='description'
					data-size='extra-small'>
					{description}
				</p>

				{/* Item icons */}
				{icons && (
					<div className='icons-container'>
						{icons.map((icon, index) => (
							<div
								className='timeline-item-icon'
								key={index}>
								<Image
									key={index}
									src={icons[index]}
									fill={true}
									alt={''}
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</li>
	);
}
