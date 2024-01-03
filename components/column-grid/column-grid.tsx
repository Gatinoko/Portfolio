'use client';

import React from 'react';

/**
 * Custom type declaration for the `ColumnGrid` React component properties.
 */
export type ColumnGridProps = {
	platform: 'desktop' | 'tablet' | 'mobile' | 'responsive';
	className?: string;
};

/**
 * React component.
 *
 * @param {ColumnGridProps} props - Component properties.
 */
export function ColumnGrid(props: ColumnGridProps) {
	const { platform = 'desktop', className = '' } = props;

	return (
		<div
			style={{
				display: 'flex',
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				position: 'fixed',
				zIndex: 99,
			}}>
			<div className='colgrid'>
				<div className='col1 col' />
				<div className='col2 col' />
				<div className='col3 col' />
				<div className='col4 col' />
				<div className='col5 col' />
				<div className='col6 col' />
				<div className='col7 col' />
				<div className='col8 col' />
				<div className='col9 col' />
				<div className='col10 col' />
				<div className='col11 col' />
				<div className='col12 col' />
			</div>
		</div>
	);
}
