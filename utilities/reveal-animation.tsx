'use client';

import React, { ReactNode, useEffect, useRef } from 'react';

import {
	AnimatePresence,
	motion,
	useAnimation,
	useInView,
} from 'framer-motion';

interface IRevealAnimation {
	children: ReactNode;
}

export default function RevealAnimation({ children }: IRevealAnimation) {
	const divRef = useRef(null);
	const isInView = useInView(divRef, { once: true });
	const animateControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			animateControls.start('animateSate');
		}
	}, [animateControls, isInView]);

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				id='animation-layer'
				ref={divRef}
				initial='initialState'
				animate={animateControls}
				transition={{
					duration: 0.4,
				}}
				variants={{
					initialState: { opacity: 0, y: 25 },
					animateSate: { opacity: 1, y: 0 },
				}}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
