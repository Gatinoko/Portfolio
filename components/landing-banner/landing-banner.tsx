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
 * @param {ButtonProps} props - Component properties.
 */
export function LandingBanner({ className, id }: LandingBannerProps) {
	return (
		<div
			id={id && id}
			className={`${className && className} landing-banner`}>
			<div className='gradient' />
		</div>
	);
}
