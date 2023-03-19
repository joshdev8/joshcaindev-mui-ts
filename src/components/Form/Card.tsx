import React from 'react';
import { Box } from '@mui/material';
import styles from '../../../styles/jss/components/card';

interface Props {
	className?: string;
	children: React.ReactNode;
	plain?: boolean;
	square?: boolean;
	carousel?: boolean;
	sx?: object;
	profile?: boolean;
	blog?: boolean;
	raised?: boolean;
	background?: boolean;
	pricing?: boolean;
	color?: 'warning' | 'success' | 'danger' | 'info' | 'primary';
	product?: boolean;
	testimonial?: boolean;
}

export default function Card(props: Props) {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		className,
		children,
		plain,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		profile,
		blog,
		raised,
		background,
		pricing,
		color,
		product,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		testimonial,
		sx,
		...rest
	} = props;
	return (
		<Box
			sx={{
				...styles.card,
				...(plain && styles.cardPlain),
				...(blog && styles.cardBlog),
				...(raised && styles.cardRaised),
				...(background && styles.cardBackground),
				...(color && styles[color]),
				...(pricing && styles.cardPricing),
				...(product && styles.cardProduct),
				...sx,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}
