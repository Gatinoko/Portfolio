'use client';

import React from 'react';

/**
 * Custom type declaration for the `Footer` React component properties.
 */
export type FooterProps = {};

/**
 * React component.
 *
 * @param {FooterProps} props - Component properties.
 */
export function Footer(props: FooterProps) {
	return (
		<footer className='footer'>
			<p data-size='extra-small'>&#169; Gabriel Dias Tinoco, 2023</p>
		</footer>
	);
}
