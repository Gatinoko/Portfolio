import React, { ReactElement, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Button, { ButtonSizes } from '../button/button';
import { cva } from 'class-variance-authority';

export type CarouselSizes =
	| 'auto'
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

export interface ICarousel {
	width?: string;
	height?: string;
	imageClassName?: string;
	imageObjectFit: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
	className?: string;
	buttonSize: ButtonSizes;
	children: ReactElement[];
}

const carousel = cva('carousel', {
	variants: {
		buttonSize: {
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
		buttonSize: 'auto',
	},
});

export default function Carousel(props: ICarousel) {
	const {
		children,
		buttonSize,
		className,
		imageClassName,
		imageObjectFit = 'cover',
		width = '500px',
		height = '500px',
	} = props;

	const [currentIndex, setCurrentIndex] = useState(0);
	const { src, fill, alt } = children[currentIndex].props;

	function onChevronClick(
		direction: 'left' | 'right',
		currentIndex: number,
		childrenLenght: number
	): void {
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
			className={carousel({ buttonSize })}
			style={{ width: width, height: height }}>
			<Button
				className={`chevron-left ${className}`}
				prefixIcon={'left-chevron'}
				size={buttonSize as ButtonSizes}
				onClick={() => onChevronClick('left', currentIndex, children.length)}
			/>
			<Button
				className={`chevron-right ${className}`}
				suffixIcon={'right-chevron'}
				size={buttonSize as ButtonSizes}
				onClick={() => onChevronClick('right', currentIndex, children.length)}
			/>
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
						<Image
							style={{ objectFit: imageObjectFit }}
							key={currentIndex}
							alt={alt}
							fill={fill}
							className={`carousel-image ${imageClassName}`}
							src={src}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}
