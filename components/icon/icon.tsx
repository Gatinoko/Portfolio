import { cva } from 'class-variance-authority';

export type IconSizes =
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

export interface IIcon {
	name: string;
	size: IconSizes;
	className?: string;
	onClick?: () => void;
}

const icon = cva('svg', {
	variants: {
		size: {
			['extra-large']: 'extra-large',
			large: 'large',
			regular: 'regular',
			small: 'small',
			['extra-small']: 'extra-small',
		},
	},
});

export default function Icon(props: IIcon) {
	const { name = 'default', size = 'regular', className, onClick } = props;

	const customClassValue = `${className ? className : ''}`;

	switch (name) {
		case 'left-chevron':
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						size,
					})}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 38 60'
					fill='none'>
					<path
						className='icon'
						d='M38 7.05L14.5128 30L38 52.95L30.7692 60L0 30L30.7692 0L38 7.05Z'
					/>
				</svg>
			);
		case 'right-chevron':
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						size,
					})}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 38 60'
					fill='none'>
					<path
						className='icon'
						transform='scaleX(-1)'
						d='M2.00635e-06 52.95L23.4872 30L0 7.05L7.23077 0L38 30L7.23077 60L2.00635e-06 52.95Z'
					/>
				</svg>
			);
		case 'github':
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						size,
					})}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 16 16'
					fill='none'>
					<path d='M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z'></path>
				</svg>
			);
		case 'link':
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						size,
					})}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 20 20'
					fill='none'>
					<path d='M7.859 14.691l-.81.805a1.814 1.814 0 0 1-2.545 0 1.762 1.762 0 0 1 0-2.504l2.98-2.955c.617-.613 1.779-1.515 2.626-.675a.992.992 0 1 0 1.397-1.407c-1.438-1.428-3.566-1.164-5.419.675l-2.98 2.956A3.719 3.719 0 0 0 2 14.244a3.72 3.72 0 0 0 1.108 2.658 3.779 3.779 0 0 0 2.669 1.096c.967 0 1.934-.365 2.669-1.096l.811-.805a.988.988 0 0 0 .005-1.4.995.995 0 0 0-1.403-.006zm9.032-11.484c-1.547-1.534-3.709-1.617-5.139-.197l-1.009 1.002a.99.99 0 1 0 1.396 1.406l1.01-1.001c.74-.736 1.711-.431 2.346.197.336.335.522.779.522 1.252s-.186.917-.522 1.251l-3.18 3.154c-1.454 1.441-2.136.766-2.427.477a.99.99 0 1 0-1.396 1.406c.668.662 1.43.99 2.228.99.977 0 2.01-.492 2.993-1.467l3.18-3.153A3.732 3.732 0 0 0 18 5.866a3.726 3.726 0 0 0-1.109-2.659z'></path>
				</svg>
			);
		default:
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						size,
					})}`}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 60 60'
					fill='none'>
					<path
						className='icon'
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M5.20241 46.8895C1.91952 42.0787 0 36.2635 0 30C0 23.7365 1.91952 17.9213 5.20241 13.1105C7.11463 10.3084 9.48941 7.84705 12.2169 5.83643C17.1931 2.16801 23.3434 0 30 0C36.6566 0 42.8069 2.16801 47.7831 5.83643C50.5106 7.84705 52.8854 10.3084 54.7976 13.1105C58.0805 17.9213 60 23.7365 60 30C60 36.2635 58.0805 42.0787 54.7976 46.8895C52.8854 49.6916 50.5106 52.153 47.7831 54.1636C42.8069 57.832 36.6566 60 30 60C23.3434 60 17.1931 57.832 12.2169 54.1636C9.48942 52.153 7.11463 49.6916 5.20241 46.8895ZM22.4872 30L11.7849 40.4575C10.0133 37.3783 9 33.8075 9 30C9 26.1925 10.0133 22.6217 11.7849 19.5425L22.4872 30ZM30 9C34.1235 9 37.9694 10.1885 41.2138 12.2415L30 23.175L18.7862 12.2415C22.0306 10.1885 25.8765 9 30 9ZM37.5128 30L48.2151 19.5425C49.9867 22.6217 51 26.1925 51 30C51 33.8075 49.9867 37.3783 48.2151 40.4575L37.5128 30ZM30 36.825L41.2138 47.7585C37.9694 49.8115 34.1235 51 30 51C25.8765 51 22.0306 49.8115 18.7862 47.7585L30 36.825Z'
					/>
				</svg>
			);
	}
}
