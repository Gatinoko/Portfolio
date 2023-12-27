import Icon from '@/components/icon/icon';
import Image from 'next/image';
import React, { ReactNode } from 'react';

/**
 * Custom type declaration for the `ProjectItem` React component properties.
 */
export type ProjectItemProps = {
	coverImage?: string;
	title: string;
	description: string;
	icons?: ReactNode[];
	githubProjectLink?: string;
	projectWebsiteLink?: string;
	className?: string;
};

/**
 * React component.
 *
 * @param {ProjectItemProps} props - Component properties.
 */
export default function ProjectItem({
	coverImage,
	title,
	description,
	icons,
	githubProjectLink,
	projectWebsiteLink,
	className = '',
}: ProjectItemProps) {
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
						{icons.map((iconNode, _index) => iconNode)}
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
