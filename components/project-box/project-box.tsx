import React, { ReactElement } from 'react';
import { ProjectItemProps } from './project-item/project-item';

interface ProjectBoxProps {
	className?: string;
	projectBoxItems:
		| ReactElement<ProjectItemProps>[]
		| ReactElement<ProjectItemProps>;
}

export default function ProjectBox(props: ProjectBoxProps) {
	const { className = '', projectBoxItems } = props;

	return <ul className={`project-box ${className}`}>{projectBoxItems}</ul>;
}
