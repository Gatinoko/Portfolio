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
	customImageClass?: string;
	size: CarouselSizes;
	children: ReactElement[];
}

const carousel = cva('carousel', {
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

export default function Carousel(props: ICarousel) {
	const { children, size, customImageClass } = props;
	const [currentIndex, setCurrentIndex] = useState(0);

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
		<div className={carousel({ size })}>
			<Button
				customClass='chevron-left'
				prefixIcon={'left-chevron'}
				size={size as ButtonSizes}
				onClick={() => onChevronClick('left', currentIndex, children.length)}
			/>
			<Button
				customClass='chevron-right'
				suffixIcon={'right-chevron'}
				size={size as ButtonSizes}
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
							key={currentIndex}
							alt={children[currentIndex].props.src}
							fill={children[currentIndex].props.fill}
							className={`${'carousel-image'} ${customImageClass}`}
							src={children[currentIndex].props.src}
						/>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}