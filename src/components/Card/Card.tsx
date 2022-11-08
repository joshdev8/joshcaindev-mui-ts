import React from 'react';
import PropTypes from 'prop-types';
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
		className,
		children,
		plain,
		profile,
		blog,
		raised,
		background,
		pricing,
		color,
		product,
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
