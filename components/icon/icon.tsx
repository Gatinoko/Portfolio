export enum IconSizes {
	LARGE,
	REGULAR,
	SMALL,
}

export interface IIcon {
	iconName: string;
	iconSize: IconSizes;
	iconFill?: string;
	width?: number;
	height?: number;
	customIconClass?: string;
	onClick?: () => void;
}

export default function Icon(props: IIcon) {
	const {
		iconName = 'default',
		iconSize = IconSizes.REGULAR,
		iconFill = 'white',
		width,
		height,
		customIconClass,
		onClick,
	} = props;

	const ICON_LIST = [
		{
			name: 'leftChevron',
			regular: {
				width: 38,
				height: 60,
			},
		},
		{
			name: 'rightChevron',
			regular: {
				width: 38,
				height: 60,
			},
		},
		{
			name: 'default',
			regular: {
				width: 60,
				height: 60,
			},
		},
	];

	function getIconSize(iconName: string) {
		const icon = ICON_LIST.find((x) => x.name === iconName);
		switch (iconSize) {
			// case IconSizes.LARGE:
			// 	return {
			// 		width: icon?.large.width,
			// 		height: icon?.large.height,
			// 	};
			case IconSizes.REGULAR:
				return {
					width: icon?.regular.width,
					height: icon?.regular.height,
				};
			// case IconSizes.SMALL:
			// 	return {
			// 		width: icon?.small.width,
			// 		height: icon?.small.height,
			// 	};
		}
	}

	switch (iconName) {
		case 'leftChevron':
			return (
				<svg
					onClick={onClick}
					className={customIconClass}
					xmlns='http://www.w3.org/2000/svg'
					width={width ? width : getIconSize('leftChevron')?.width}
					height={height ? height : getIconSize('leftChevron')?.height}
					viewBox='0 0 38 60'
					fill='none'>
					<path
						d='M38 7.05L14.5128 30L38 52.95L30.7692 60L-1.31134e-06 30L30.7692 -3.16067e-07L38 7.05Z'
						fill={iconFill}
					/>
				</svg>
			);
		case 'rightChevron':
			return (
				<svg
					onClick={onClick}
					className={customIconClass}
					xmlns='http://www.w3.org/2000/svg'
					width={width ? width : getIconSize('rightChevron')?.width}
					height={height ? height : getIconSize('rightChevron')?.height}
					viewBox='0 0 38 60'
					fill='none'>
					<path
						d='M38 7.05L14.5128 30L38 52.95L30.7692 60L-1.31134e-06 30L30.7692 -3.16067e-07L38 7.05Z'
						fill={iconFill}
					/>
				</svg>
			);
		default:
			return (
				<svg
					onClick={onClick}
					className={customIconClass}
					xmlns='http://www.w3.org/2000/svg'
					width={width ? width : getIconSize('default')?.width}
					height={width ? width : getIconSize('default')?.height}
					viewBox='0 0 60 60'
					fill='none'>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M5.20241 46.8895C1.91952 42.0787 0 36.2635 0 30C0 23.7365 1.91952 17.9213 5.20241 13.1105C7.11463 10.3084 9.48941 7.84705 12.2169 5.83643C17.1931 2.16801 23.3434 0 30 0C36.6566 0 42.8069 2.16801 47.7831 5.83643C50.5106 7.84705 52.8854 10.3084 54.7976 13.1105C58.0805 17.9213 60 23.7365 60 30C60 36.2635 58.0805 42.0787 54.7976 46.8895C52.8854 49.6916 50.5106 52.153 47.7831 54.1636C42.8069 57.832 36.6566 60 30 60C23.3434 60 17.1931 57.832 12.2169 54.1636C9.48942 52.153 7.11463 49.6916 5.20241 46.8895ZM22.4872 30L11.7849 40.4575C10.0133 37.3783 9 33.8075 9 30C9 26.1925 10.0133 22.6217 11.7849 19.5425L22.4872 30ZM30 9C34.1235 9 37.9694 10.1885 41.2138 12.2415L30 23.175L18.7862 12.2415C22.0306 10.1885 25.8765 9 30 9ZM37.5128 30L48.2151 19.5425C49.9867 22.6217 51 26.1925 51 30C51 33.8075 49.9867 37.3783 48.2151 40.4575L37.5128 30ZM30 36.825L41.2138 47.7585C37.9694 49.8115 34.1235 51 30 51C25.8765 51 22.0306 49.8115 18.7862 47.7585L30 36.825Z'
						fill={iconFill}
					/>
				</svg>
			);
	}
}
