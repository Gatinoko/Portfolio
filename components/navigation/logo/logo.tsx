'use client';

/**
 * Custom type declaration for the `Logo` React component properties.
 */
export type LogoProps = {
	className?: string;
	href?: string;
};

/**
 * React component.
 *
 * @param {LogoProps} props - Component properties.
 */
export function Logo({ className, href }: LogoProps) {
	return (
		<a
			className={`${className && className} logo`}
			href={href && href}
			aria-label="Reload the website's landing page">
			<svg
				className='logo-svg'
				xmlns='http://www.w3.org/2000/svg'
				height='100%'
				viewBox='0 0 200 93'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M63.9818 36C63.4558 21.5516 51.5769 10 37 10V10.0114C22.6181 10.42 10.9704 21.7498 10.0576 36L10 56C10 56.932 10.0472 57.8529 10.1394 58.7606C11.198 69.1842 18.1858 77.855 27.6769 81.3471C30.7058 66.8717 43.5419 56 58.9171 56L74 56V93H64V81.2984C57.2492 88.5003 47.6501 93 37 93C26.3499 93 16.7508 88.5003 10 81.2984C6.66667 78.1989 0 68.8 0 56L0.0423012 36C0.971519 16.2248 17.0945 0.423907 37 0.00842285V0C57.1002 0 73.4568 16.0278 73.9867 36L63.9818 36ZM58.9171 66H62.0876C58.1784 75.7988 48.6946 82.7698 37.555 82.9944C39.789 73.2603 48.5052 66 58.9171 66Z'
				/>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M98 93H88V23.5C88 16.2116 81.2242 10.263 74 10V0H98C118.435 0 135 16.5655 135 37V56C135 76.4345 118.435 93 98 93ZM98 10H93.7378C96.4233 13.8199 98 18.4758 98 23.5V83C112.912 83 125 70.9117 125 56V37C125 22.0883 112.912 10 98 10Z'
				/>
				<path d='M135 10V0H162.108C172.758 0 182.357 4.49963 189.108 11.7017V0H199.108V36H189.09C188.564 21.5516 176.685 10 162.108 10V93H152.108V10H135Z' />
			</svg>
		</a>
	);
}
