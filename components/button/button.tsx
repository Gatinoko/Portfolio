import React, { ComponentProps, useState } from 'react';
import { cva } from 'class-variance-authority';
import Icon, { IconSizes } from '../icon/icon';

const button = cva('button', {
	variants: {
		size: {
			['extra-large']: 'extra-large',
			large: 'large',
			regular: 'regular',
			medium: 'medium',
			small: 'small',
			['extra-small']: 'extra-small',
		},
	},
	defaultVariants: {
		size: 'regular',
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
	prefixIcon?: string;
	suffixIcon?: string;
	className?: string;
	onClick?: () => void;
} & {
	throttleValue?: number;
} & ComponentProps<'button'>;

export default function Button(props: IButton) {
	let {
		text,
		size,
		className = '',
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
			className={`${className} ${button({ size })}`}
			onClick={buttonClick}
			{...extraProps}>
			{prefixIcon && (
				<Icon
					customClass='prefix-icon'
					name={`${prefixIcon}`}
					size={size}
				/>
			)}
			{text}
			{suffixIcon && (
				<Icon
					customClass='suffix-icon'
					name={`${suffixIcon}`}
					size={size}
				/>
			)}
		</button>
	);
}
