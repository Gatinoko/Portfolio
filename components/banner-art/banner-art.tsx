'use client';

/**
 * Custom type declaration for the `LandingBanner` React component properties.
 */
export type BannerArtProps = {
	className?: string;
	id?: string;
};

/**
 * React component.
 *
 * @param {BannerArtProps} props - Component properties.
 */
export function BannerArt({ className = '', id }: BannerArtProps) {
	return (
		<div
			id={id}
			className={`${className} banner-art`}>
			<div className='gradient' />
		</div>
	);
}
