'use client';

import { getDictionary } from '@/i18n/get-dictionary';
import { Button } from '../button/button';
import { Icon } from '../icon/icon';
import { Tooltip } from '../tooltip/tooltip';

/**
 * Custom type declaration for the `ContactButtons` React component properties.
 */
export type ContactButtonsProps = {
	dictionary: Awaited<ReturnType<typeof getDictionary>>['contactButtons'];
};

/**
 * React component.
 *
 * @param {ContactButtonsProps} props - Component properties.
 */
export function ContactButtons({ dictionary }: ContactButtonsProps) {
	// Opens specified link in a new tab
	function openUrlInNewTab(url: string) {
		window.open(url, '_blank')?.focus();
	}

	return (
		<div className='contact-buttons'>
			{/*  Copy email button */}
			<Tooltip
				text={dictionary.email.text}
				size='extra-small'>
				<Button
					aria-label={dictionary.email.ariaLabel}
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
				text={dictionary.linkedIn.text}
				size='extra-small'>
				<Button
					aria-label={dictionary.linkedIn.ariaLabel}
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
				text={dictionary.resume.text}
				size='extra-small'>
				<Button
					aria-label={dictionary.resume.ariaLabel}
					size={'small'}
					onClick={() => openUrlInNewTab(dictionary.resume.link)}
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
