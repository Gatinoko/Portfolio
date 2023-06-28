/* eslint-disable react/display-name */

import React, { LegacyRef, ReactNode, forwardRef } from 'react';

interface IContentSection {
	children: ReactNode;
	classNames?: string;
}

export default function ContentSection({
	children,
	classNames,
}: IContentSection) {
	return <div className={`index-section ${classNames}`}>{children}</div>;
}
