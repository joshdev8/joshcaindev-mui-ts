import React from 'react';
import { Box } from '@mui/material';

interface Props {
	className?: string;
	children: React.ReactNode;
	sx?: object;
	plain?: boolean;
	profile?: boolean;
	pricing?: boolean;
	testimonial?: boolean;
}

const styles = {
	cardFooter: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'transparent',
		padding: '0.9375rem 1.875rem',
		paddingTop: '0',
	},
	cardFooterProfile: {
		marginTop: '-15px',
	},
	cardFooterPlain: {
		paddingLeft: '5px',
		paddingRight: '5px',
		backgroundColor: 'transparent',
	},
	cardFooterPricing: {
		zIndex: '2',
	},
	cardFooterTestimonial: {
		display: 'block',
	},
};

export default function CardFooter(props: Props) {
	const {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		className,
		children,
		plain,
		profile,
		pricing,
		testimonial,
		sx,
		...rest
	} = props;
	return (
		<Box
			sx={{
				...styles.cardFooter,
				...(plain && styles.cardFooterPlain),
				...(profile && styles.cardFooterProfile),
				...(pricing && styles.cardFooterPricing),
				...(testimonial && styles.cardFooterTestimonial),
				// ...(className && styles[className]),
				...sx,
			}}
			{...rest}
		>
			{children}
		</Box>
	);
}
