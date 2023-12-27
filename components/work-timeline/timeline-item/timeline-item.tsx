import React, { PropsWithChildren, ReactElement } from 'react';
import {
	TimelineSubitem,
	TimelineSubitemProps,
} from '../timeline-subitem/timeline-subitem';

/**
 * Custom type declaration for the `TimelineItem` React component properties.
 */
export type TimelineItemProps = {
	title: string;
	date?: string;
	className?: string;
	children:
		| ReactElement<TimelineSubitemProps>[]
		| ReactElement<TimelineSubitemProps>;
} & PropsWithChildren;

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
					<h5 className='title'>{title}</h5>
				</div>

				{/* Timeline subitem container */}
				<div className='subitem-container'>
					{Array.isArray(children) ? (
						<>
							{children.map(({ key, props, type }) => (
								<TimelineSubitem
									key={`subItem-${key}`}
									startDate={props.startDate}
									endDate={props.endDate}
									subtitle={props.subtitle}
									description={props.description}
									icons={props.icons}
								/>
							))}
						</>
					) : (
						<TimelineSubitem
							key={`subItem-${children.key}`}
							startDate={children.props.startDate}
							endDate={children.props.endDate}
							subtitle={children.props.subtitle}
							description={children.props.description}
							icons={children.props.icons}
						/>
					)}
				</div>
			</div>
		</li>
	);
}
