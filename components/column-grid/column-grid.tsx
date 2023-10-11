import { cva } from 'class-variance-authority';
import React from 'react';

interface ColumnGridProps {
	platform: 'desktop' | 'tablet' | 'mobile' | 'responsive';
	className?: string;
}

const columnGrid = cva('colgrid', {
	variants: {
		platform: {
			mobile: 'mobile',
			tablet: 'tablet',
			desktop: 'desktop',
			responsive: 'responsive',
		},
	},
});

export default function ColumnGrid(props: ColumnGridProps) {
	const { platform = 'desktop', className = '' } = props;

	return (
		<div className={`${columnGrid({ platform })}`}>
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
	);
}
