import { cva } from 'class-variance-authority';

export type IconSizes =
	| 'auto'
	| 'extra-large'
	| 'large'
	| 'regular'
	| 'small'
	| 'extra-small';

export interface IIcon {
	name: string;
	size: IconSizes;
	customClass?: string;
	onClick?: () => void;
}

const icon = cva('', {
	variants: {
		name: {
			['left-chevron']: 'left-chevron',
			['right-chevron']: 'right-chevron',
			default: 'default',
		},
		size: {
			auto: 'auto',
			['extra-large']: 'extra-large',
			large: 'large',
			regular: 'regular',
			small: 'small',
			['extra-small']: 'extra-small',
		},
	},
});

export default function Icon(props: IIcon) {
	const { name = 'default', size = 'regular', customClass, onClick } = props;

	const customClassValue = `${customClass ? customClass : ''}`;

	switch (name) {
		case 'left-chevron':
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						name,
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
						name,
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
		default:
			return (
				<svg
					onClick={onClick}
					className={`${customClassValue} ${icon({
						name: 'default',
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
