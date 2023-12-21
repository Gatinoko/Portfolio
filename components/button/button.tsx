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
		variant: {
			default: 'default',
			flat: 'flat',
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

export type ButtonProps = {
	text?: string;
	size: ButtonSizes;
	variant: 'default' | 'flat';
	prefixIcon?: string;
	suffixIcon?: string;
	className?: string;
	onClick?: () => void;
} & {
	throttleValue?: number;
} & ComponentProps<'button'>;

export default function Button(props: ButtonProps) {
	let {
		text,
		size,
		variant = 'default',
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
			className={`${className} ${button({ size, variant })}`}
			onClick={buttonClick}
			{...extraProps}>
			{/* Prefix icon */}
			{prefixIcon && (
				<Icon
					className='prefix-icon'
					name={`${prefixIcon}`}
					size={size}
				/>
			)}

			{/* Text */}
			{text}

			{/* Suffix icon */}
			{suffixIcon && (
				<Icon
					className='suffix-icon'
					name={`${suffixIcon}`}
					size={size}
				/>
			)}
		</button>
	);
}
