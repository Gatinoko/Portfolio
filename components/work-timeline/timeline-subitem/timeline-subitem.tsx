import { IconProps } from '@/components/icon/icon';
import React, { ReactElement, ReactNode } from 'react';

/**
 * Custom type declaration for the `TimelineSubitem` React component properties.
 */
export type TimelineSubitemProps = {
	subtitle: string;
	children: string;
	startDate?: string;
	endDate?: string;
	className?: string;
	icons?: ReactElement<IconProps>[];
};

/**
 * React component.
 *
 * @param {TimelineSubitemProps} props - Component properties.
 */
export function TimelineSubitem({
	subtitle,
	children,
	startDate,
	endDate,
	className = '',
	icons,
}: TimelineSubitemProps) {
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
			<h5 className='subtitle h-xs'>{subtitle}</h5>

			{/* Description */}
			<p className='description'>{children}</p>

			{/* Tech icons */}
			{icons && (
				<div className='icons'>{icons.map((iconNode, _index) => iconNode)}</div>
			)}
		</div>
	);
}
