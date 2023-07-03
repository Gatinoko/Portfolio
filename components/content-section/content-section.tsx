/* eslint-disable react/display-name */
import styles from './content-section.module.scss';

import React, { LegacyRef, ReactNode, forwardRef } from 'react';

interface IContentSection {
	children: ReactNode;
	id: string;
	classNames?: string;
}

export default function ContentSection({
	children,
	id,
	classNames,
}: IContentSection) {
	return (
		<div
			id={id}
			className={`${styles['content-section']} ${classNames}`}>
			{children}
		</div>
	);
}
