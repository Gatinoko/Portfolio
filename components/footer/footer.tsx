/* eslint-disable react/display-name */
import { cva } from 'class-variance-authority';
import styles from './page-section.module.scss';

import React, { LegacyRef, ReactNode, forwardRef } from 'react';

interface FooterType {}

const footer = cva('footer');

export default function Footer(props: FooterType) {
	return (
		<footer className={footer({})}>
			<h6>footer goes here</h6>
		</footer>
	);
}
