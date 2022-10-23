// import {} from 'radix-ui';
import { clsx } from 'clsx';

export interface HeadingProps {
	size?: 'sm' | 'md' | 'lg';
	children: string;
}

export function Heading({ size = 'md', children }: HeadingProps) {
	return (
		<span
			className={clsx('text-gray-100 font-sans', {
				'text-xs': size === 'sm',
				'text-sm': size === 'md',
				'text-md': size === 'lg',
			})}
		>
			{children}
		</span>
	);
}
