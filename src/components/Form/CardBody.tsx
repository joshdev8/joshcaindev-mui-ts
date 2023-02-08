import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import styles from '../../../styles/jss/components/cardBodyStyle';

interface Props {
	className?: string;
	children: React.ReactNode;
	plain?: boolean;
	formHorizontal?: boolean;
	sx?: object;
	pricing?: boolean;
	signup?: boolean;
	color?: 'success' | 'danger' | 'info' | 'primary';
	background?: boolean;
}

export default function CardBody(props: Props) {
	const {
		className,
		children,
		background,
		plain,
		formHorizontal,
		pricing,
		signup,
		color,
		sx,
		...rest
	} = props;
	return (
		<Box
			sx={{
				...styles.cardBody,
				...(background && styles.cardBodyBackground),
				...(plain && styles.cardBodyPlain),
				...(formHorizontal && styles.cardBodyFormHorizontal),
				...(pricing && styles.cardPricing),
				...(signup && styles.cardSignup),
				...sx,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}
