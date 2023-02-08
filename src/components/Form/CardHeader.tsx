import React from 'react';
import { Box } from '@mui/material';
import styles from '../../../styles/jss/components/cardHeader';

interface Props {
	className?: string;
	color?: 'warning' | 'success' | 'danger' | 'info' | 'primary';
	children: React.ReactNode;
	plain?: boolean;
	image?: boolean;
	sx?: object;
	contact?: boolean;
	signup?: boolean;
	noShadow?: boolean;
}

export default function CardHeader(props: Props) {
	const {
		className,
		children,
		color,
		plain,
		image,
		contact,
		signup,
		noShadow,
		sx,
		...rest
	} = props;
	return (
		<Box
			sx={{
				...styles.cardHeader,
				// ...(color && styles[color + 'CardHeader']),
				...(plain && styles.cardHeaderPlain),
				...(image && styles.cardHeaderImage),
				...(contact && styles.cardHeaderContact),
				...(signup && styles.cardHeaderSignup),
				...(noShadow && styles.noShadow),
				// ...(className && styles[className]),
				...sx,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}
