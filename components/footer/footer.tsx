/* eslint-disable react/display-name */
import { cva } from 'class-variance-authority';

import React from 'react';

interface FooterType {}

const footer = cva('footer');

export default function Footer(props: FooterType) {
	return (
		<footer className={footer({})}>
			<p
				id='CopyrightNotice'
				data-size='extra-small'>
				&#169; Gabriel Dias Tinoco, 2023
			</p>
		</footer>
	);
}
