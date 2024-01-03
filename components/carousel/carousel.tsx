'use client';

import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ButtonSizes, Button } from '../button/button';
import { cva } from 'class-variance-authority';
import { Icon, IconSizes } from '../icon/icon';

export type CarouselSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

export interface CarouselProps {
	width?: string;
	height?: string;
	size: CarouselSizes;
	className?: string;
	imageClassName?: string;
	imageObjectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
	children: ReactElement[];
}

// TODO: REFACTOR COMPONENT
export default function Carousel(props: CarouselProps) {
	const {
		width = '500px',
		height = '500px',
		size,
		className,
		imageClassName,
		imageObjectFit = 'cover',
		children,
	} = props;

	const [currentIndex, setCurrentIndex] = useState(0);
	const { src, fill, alt } = children[currentIndex].props;

	// Component CVA function
	const carousel = cva('carousel', {
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

	// Chevron buttons click handler
	function buttonClickHandler(
		direction: 'left' | 'right',
		currentIndex: number,
		childrenLenght: number
	) {
		switch (direction) {
			case 'left':
				setCurrentIndex(
					currentIndex - 1 < 0 ? childrenLenght - 1 : currentIndex - 1
				);
				break;
			case 'right':
				setCurrentIndex(
					currentIndex + 1 === childrenLenght ? 0 : currentIndex + 1
				);
				break;
		}
	}

	return (
		<div
			className={carousel({ size })}
			style={{ width: width, height: height }}>
			{/* Left chevron button */}
			<Button
				className={`chevron-left ${className}`}
				icon={
					<Icon
						name={'left-chevron'}
						size={size as IconSizes}
					/>
				}
				size={size}
				onClick={() =>
					buttonClickHandler('left', currentIndex, children.length)
				}
			/>

			{/* Right chevron button */}
			<Button
				className={`chevron-right ${className}`}
				icon={
					<Icon
						name={'right-chevron'}
						size={size as IconSizes}
					/>
				}
				size={size}
				onClick={() =>
					buttonClickHandler('right', currentIndex, children.length)
				}
			/>

			{/* Image container */}
			<div
				id='ImageContainer'
				className={'image-container'}>
				<AnimatePresence>
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							opacity: { duration: 0.5 },
						}}>
						{children}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
