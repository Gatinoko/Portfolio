/**
 * Custom type declaration for the `LandingBanner` React component properties.
 */
export type LandingBannerProps = {
	className?: string;
	id?: string;
};

/**
 * React component.
 *
 * @param {LandingBannerProps} props - Component properties.
 */
export function LandingBanner({ className = '', id }: LandingBannerProps) {
	return (
		<div
			id={id}
			className={`${className} landing-banner`}>
			<div className='gradient' />
		</div>
	);
}
