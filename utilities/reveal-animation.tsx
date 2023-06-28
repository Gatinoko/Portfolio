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
				ref={divRef}
				initial='initialState'
				animate={animateControls}
				transition={{
					duration: 0.5,
					delay: 0.25,
				}}
				variants={{
					initialState: { opacity: 0, y: 75 },
					animateSate: { opacity: 1, y: 0 },
				}}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
