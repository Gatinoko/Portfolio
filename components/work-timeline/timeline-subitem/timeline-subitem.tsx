import Image from 'next/image';
import React from 'react';

export interface TimelineSubitemProps {
	startDate?: string;
	endDate?: string;
	subtitle: string;
	description: string;
	className?: string;
	icons?: string[];
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
				className='subitem-date'
				data-size='extra-small'>
				{startDate}
				<br />
				{endDate}
			</p>

			{/* Item subtitle */}
			<h6 className='subtitle'>{subtitle}</h6>

			{/* Item description */}
			<p className='description'>{description}</p>

			{/* Item icons */}
			{icons && (
				<div className='icons-container'>
					{icons.map((icon, index) => (
						<div
							className='timeline-item-icon'
							key={index}>
							<Image
								src={icons[index]}
								fill={true}
								alt={''}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
