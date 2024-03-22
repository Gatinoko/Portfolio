import Link from 'next/link';

/**
 * Custom type declaration for the `FooterListItem` React component properties.
 */
export type FooterListItemProps = {
	className?: string;
	text: string;
	href?: string;
};

/**
 * React component.
 *
 * @param {FooterListItemProps} props - Component properties.
 */
export function FooterListItem(props: FooterListItemProps) {
	const { className, text, href } = props;

	return (
		<li className={`footer-list-item ${className ? className : ''}`}>
			{href ? <Link href={href}>{text}</Link> : text}
		</li>
	);
}
