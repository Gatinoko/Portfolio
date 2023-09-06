/* eslint-disable react/display-name */
import styles from './page-section.module.scss';

import React, { LegacyRef, ReactNode, forwardRef } from 'react';

interface IPageSection {
	children: ReactNode;
	id: string;
	className?: string;
}

export default function ContentSection({
	children,
	id,
	className,
}: IPageSection) {
	return (
		<section
			id={id}
			className={`page-section ${className}`}>
			{children}
		</section>
	);
}
