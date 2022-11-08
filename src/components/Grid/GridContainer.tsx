import React from 'react';
import Grid from '@mui/material/Grid';

interface Props {
	children: React.ReactNode;
	xs?: number;
	sm?: number;
	md?: number;
	className?: string;
	sx?: object;
}

export default function GridContainer(props: Props) {
	const { children, className, sx, ...rest } = props;
	return (
		<Grid
			container
			{...rest}
			className={className}
			sx={{
				mx: '-15px',
				width: 'auto',
				...sx,
			}}
		>
			{children}
		</Grid>
	);
}
