import { cva } from 'class-variance-authority';

export type LandingBannerProps = {
	className?: string;
};

const landingBanner = cva('landing-banner');

export function LandingBanner(props: LandingBannerProps) {
	const { className } = props;

	const customClassValue = `${className ? className : ''}`;

	return (
		<div className={`${customClassValue} ${landingBanner({})}`}>
			<div className='cursor-radial' />
			<div className='gradient' />
		</div>
	);
}
