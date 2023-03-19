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

const styles = {
	grid: {
		position: 'relative',
		width: '100%',
		minHeight: '1px',
		paddingRight: '15px',
		paddingLeft: '15px',
	},
};

export default function GridItem(props: Props) {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { children, className, sx, ...rest } = props;
	return (
		<Grid
			item
			{...rest}
			sx={{
				...styles.grid,
				...sx,
			}}
		>
			{children}
		</Grid>
	);
}
