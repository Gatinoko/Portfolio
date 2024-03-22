import {
	FooterListItem,
	FooterListItemProps,
} from './footer-list-item/footer-list-item';

/**
 * Custom type declaration for the `FooterList` React component properties.
 */
type FooterListProps = {
	className?: string;
	header: string;
	items: FooterListItemProps[];
};

/**
 * React component.
 *
 * @param {FooterListProps} props - Component properties.
 */
export function FooterList(props: FooterListProps) {
	let { className = '', items, header } = props;

	return (
		<div className={`footer-list ${className}`}>
			{/* Header */}
			<p className='header'>{header}</p>

			<hr data-variant='solid-small' />

			{/* List */}
			<ul className='list'>
				{items.map((item, index) => (
					<FooterListItem
						key={`footerListItem-${index}`}
						text={item.text}
						href={item.href}
					/>
				))}
			</ul>
		</div>
	);
}
