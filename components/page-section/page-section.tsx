/* eslint-disable react/display-name */
import styles from './page-section.module.scss';

import React, { LegacyRef, ReactNode, forwardRef } from 'react';

interface IPageSection {
	children: ReactNode;
	id: string;
	classNames?: string;
}

export default function ContentSection({
	children,
	id,
	classNames,
}: IPageSection) {
	return (
		<section
			id={id}
			className={`${styles['page-section']} ${classNames}`}>
			{children}
		</section>
	);
}
