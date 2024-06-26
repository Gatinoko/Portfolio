import { Icon, IconProps } from '@/components/icon/icon';
import Image from 'next/image';
import React, { ReactElement, ReactNode } from 'react';

/**
 * Custom type declaration for the `ProjectItem` React component properties.
 */
export type ProjectItemProps = {
	coverImage?: string;
	title: string;
	children: string;
	icons?: ReactElement<IconProps>[];
	githubProjectLink?: string;
	projectWebsiteLink?: string;
	className?: string;
};

/**
 * React component.
 *
 * @param {ProjectItemProps} props - Component properties.
 */
export function ProjectItem({
	coverImage,
	title,
	children,
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
				<h4 className='title h-xs'>{title}</h4>

				{/* Description */}
				<p className='description'>{children}</p>

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
					<a
						href={githubProjectLink}
						aria-label={"Access this project's repository on GitHub"}>
						<Icon
							name={'github'}
							size={'small'}
						/>
					</a>
				)}
				{projectWebsiteLink && (
					<a
						href={projectWebsiteLink}
						aria-label={"Access this project's live website"}>
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
