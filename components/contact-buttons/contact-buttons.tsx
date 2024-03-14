'use client';

import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import { Tooltip } from '../tooltip/tooltip';

/**
 * Custom type declaration for the `ContactButtons` React component properties.
 */
export type ContactButtonsProps = {};

/**
 * React component.
 *
 * @param {ContactButtonsProps} props - Component properties.
 */
export function ContactButtons() {
	// Opens specified link in a new tab
	function openUrlInNewTab(url: string) {
		window.open(url, '_blank')?.focus();
	}

	return (
		<div className='contact-buttons'>
			{/*  Copy email button */}
			<Tooltip
				text='Copy email'
				size='extra-small'>
				<Button
					aria-label={'Copy email address'}
					size={'small'}
					onClick={() =>
						navigator.clipboard.writeText('gabriel.dias.tinoco@gmail.com')
					}
					icon={
						<Icon
							name={'email'}
							size={'extra-large'}
						/>
					}
				/>
			</Tooltip>

			{/*  LinkedIn profile button */}
			<Tooltip
				text='LinkedIn profile'
				size='extra-small'>
				<Button
					aria-label={'LinkedIn profile'}
					size={'small'}
					onClick={() =>
						openUrlInNewTab('https://www.linkedin.com/in/gabriel-dias-tinoco/')
					}
					icon={
						<Icon
							name={'linkedIn'}
							size={'extra-large'}
						/>
					}
					externalLinkIndicator
				/>
			</Tooltip>

			{/*  Resume link button */}
			<Tooltip
				text='Resume link'
				size='extra-small'>
				<Button
					aria-label={'Resume link'}
					size={'small'}
					onClick={() =>
						openUrlInNewTab('https://www.linkedin.com/in/gabriel-dias-tinoco/')
					}
					icon={
						<Icon
							name={'resume'}
							size={'extra-large'}
						/>
					}
					externalLinkIndicator
				/>
			</Tooltip>
		</div>
	);
}
