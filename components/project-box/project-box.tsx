import React, { PropsWithChildren, ReactElement } from 'react';
import { ProjectItemProps } from './project-item/project-item';

/**
 * Custom type declaration for the `ProjectBox` React component properties.
 */
export type ProjectBoxProps = {
	className?: string;
	children: ReactElement<ProjectItemProps>[] | ReactElement<ProjectItemProps>;
} & PropsWithChildren;

/**
 * React component.
 *
 * @param {ProjectBoxProps} props - Component properties.
 */
export function ProjectBox({ className = '', children }: ProjectBoxProps) {
	return <ul className={`project-box ${className}`}>{children}</ul>;
}
