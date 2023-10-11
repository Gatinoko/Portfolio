/* eslint-disable react/display-name */
import Icon from '@/components/icon/icon';
import Image from 'next/image';
import React, { ReactNode } from 'react';

export interface ProjectItemProps {
	coverImage?: string;
	title: string;
	description: string;
	icons?: ReactNode[];
	githubProjectLink?: string;
	projectWebsiteLink?: string;
	className?: string;
}

export default function ProjectItem(props: ProjectItemProps) {
	const {
		coverImage,
		title,
		description,
		icons,
		githubProjectLink,
		projectWebsiteLink,
		className = '',
	} = props;
	return (
		<li className={`project-item ${className}`}>
			{/* Image */}
			{coverImage && (
				<div className='cover-image'>
					<Image
						style={{ objectFit: 'cover' }}
						src={coverImage}
						fill={true}
						alt={''}
					/>
				</div>
			)}

			{/* Main information */}
			<div className='main-information'>
				{/* Title */}
				<h6 className='title'>{title}</h6>

				{/* Description */}
				<p className='description'>{description}</p>

				{/* Technology icons */}
				{icons && (
					<div className='tech-icons'>
						{icons.map((iconNode, index) => iconNode)}
					</div>
				)}
			</div>

			{/* Links to websites */}
			<div className='icon-links'>
				{githubProjectLink && (
					<a href={githubProjectLink}>
						<Icon
							name={'github'}
							size={'small'}
						/>
					</a>
				)}
				{projectWebsiteLink && (
					<a href={projectWebsiteLink}>
						<Icon
							name={'link'}
							size={'small'}
						/>
					</a>
				)}
			</div>
		</li>
	);
}
