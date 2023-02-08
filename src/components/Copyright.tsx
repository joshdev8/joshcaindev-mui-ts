import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';

export default function Copyright() {
	return (
		<Box
			sx={{
				pt: 4,
				mt: 8,
				borderTop: theme => `1px solid ${theme.palette.divider}`,
				pb: 2,
				mb: 2,
			}}
		>
			<Typography variant="body2" color="text.secondary" align="center">
				{'Copyright © '}
				<Link color="inherit" href="https://joshcaindev.com/">
					Josh Cain
				</Link>{' '}
				{new Date().getFullYear()}.
			</Typography>
		</Box>
	);
}
