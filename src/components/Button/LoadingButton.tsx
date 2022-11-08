import React from 'react';
import { LoadingButton } from '@mui/lab';

import styles from '../../../styles/jss/components/button';

interface Props {
	color?: 'primary' | 'info' | 'success' | 'warning' | 'danger';
	size?: 'sm' | 'lg';
	round?: boolean;
	children: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	justIcon?: boolean;
	simple?: boolean;
	block?: boolean;
	link?: boolean;
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	fullWidth?: boolean;
	fileButton?: boolean;
	sx?: object;
}

const RegularLoadingButton = React.forwardRef<HTMLButtonElement, Props>(
	(props, ref) => {
		const {
			color,
			round,
			children,
			fullWidth,
			disabled,
			simple,
			size,
			block,
			link,
			justIcon,
			fileButton,
			className,
			sx,
			...rest
		} = props;
		return (
			<LoadingButton
				{...rest}
				ref={ref}
				sx={{
					...styles.button,
					...(size && styles[size]),
					...(color && styles[color]),
					...(round && styles.round),
					...(fullWidth && styles.fullWidth),
					...(disabled && styles.disabled),
					...(simple && styles.simple),
					...(block && styles.block),
					...(link && styles.link),
					...(justIcon && styles.justIcon),
					...(fileButton && styles.fileButton),
					// ...(className && styles[className]),
					...sx,
				}}
			>
				{children}
			</LoadingButton>
		);
	}
);

export default RegularLoadingButton;
