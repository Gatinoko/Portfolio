import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import Icon, { IconSizes } from '../icon/icon';

const button = cva('button', {
	variants: {
		size: {
			auto: 'auto',
			['extra-large']: 'extra-large',
			large: 'large',
			regular: 'regular',
			medium: 'medium',
			small: 'small',
			['extra-small']: 'extra-small',
		},
	},
	defaultVariants: {
		size: 'auto',
	},
});

export type ButtonSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

export type IButton = {
	text?: string;
	size: ButtonSizes;
	customClass: string;
	prefixIcon?: string;
	suffixIcon?: string;
	onClick?: () => void;
} & { throttleValue?: number };

export default function Button(props: IButton) {
	let {
		text,
		size,
		customClass,
		prefixIcon,
		suffixIcon,
		onClick = () => {},
		...extraProps
	} = props;

	const [clickThrottleLock, setClickThrottleLock] = useState(false);

	async function throttleClick(throttleValue: number) {
		if (clickThrottleLock) return;
		setClickThrottleLock(true);
		onClick();
		setTimeout(() => {
			setClickThrottleLock(false);
		}, throttleValue);
	}

	function buttonClick(): void {
		if (Object.hasOwnProperty.call(props, 'throttleValue')) {
			const { throttleValue } = props;
			throttleClick(throttleValue as number);
		} else onClick();
	}

	return (
		<button
			className={`${customClass} ${button({ size })}`}
			onClick={buttonClick}
			{...extraProps}>
			{prefixIcon && (
				<Icon
					name={`${prefixIcon}`}
					size={size as IconSizes}
				/>
			)}
			{text}
			{suffixIcon && (
				<Icon
					name={`${suffixIcon}`}
					size={size as IconSizes}
				/>
			)}
		</button>
	);
}
