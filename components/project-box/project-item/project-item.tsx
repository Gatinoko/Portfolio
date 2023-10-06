/* eslint-disable react/display-name */
import Image from 'next/image';
import React from 'react';

export interface ProjectItemProps {
	icon: string;
	title: string;
	description: string;
	className?: string;
}

export default function ProjectItem(props: ProjectItemProps) {
	const { icon, title, description, className } = props;
	return (
		<li className={`project-item ${className}`}>
			<div className='icon'>
				<Image
					style={{ objectFit: 'cover' }}
					src={icon}
					fill={true}
					alt={''}
				/>
			</div>
			<div className='title-description-container'>
				<h6 className='title'>{title}</h6>
				<p className='description'>{description}</p>
			</div>
		</li>
	);
}
