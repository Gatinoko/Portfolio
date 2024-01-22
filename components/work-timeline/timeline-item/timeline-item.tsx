import React, { ReactElement } from 'react';
import {
	TimelineSubitem,
	TimelineSubitemProps,
} from '../timeline-subitem/timeline-subitem';

/**
 * Custom type declaration for the `TimelineItem` React component properties.
 */
export type TimelineItemProps = {
	title: string;
	date: string;
	className?: string;
	children:
		| ReactElement<TimelineSubitemProps>[]
		| ReactElement<TimelineSubitemProps>;
};

/**
 * React component.
 *
 * @param {TimelineItemProps} props - Component properties.
 */
export function TimelineItem({
	title = 'Title',
	date,
	className = '',
	children,
}: TimelineItemProps) {
	return (
		<li className={`${className} timeline-item`}>
			{/* Separator div */}
			<div className='left-separator' />

			{/* Container with information */}
			<div className='information-container'>
				{/* Item heading */}
				<div className='item-heading'>
					{/* Date */}
					{date && (
						<p
							className='date'
							data-size='extra-small'>
							{date}
						</p>
					)}

					{/* Item title */}
					<h4 className='title h-s'>{title}</h4>
				</div>

				{/* Timeline subitem container */}
				<div className='subitem-container'>
					{Array.isArray(children) ? (
						<>
							{children.map(({ key, props }) => (
								<TimelineSubitem
									key={`subItem-${key}`}
									startDate={props.startDate}
									endDate={props.endDate}
									subtitle={props.subtitle}
									icons={props.icons}>
									{props.children}
								</TimelineSubitem>
							))}
						</>
					) : (
						<TimelineSubitem
							key={`subItem-${children.key}`}
							startDate={children.props.startDate}
							endDate={children.props.endDate}
							subtitle={children.props.subtitle}
							icons={children.props.icons}>
							{children.props.children}
						</TimelineSubitem>
					)}
				</div>
			</div>
		</li>
	);
}
