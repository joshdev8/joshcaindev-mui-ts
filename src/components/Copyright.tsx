import { Box, Link, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

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
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<SocialIcon
					url="https://linkedin.com/in/joshcain8"
					style={{ height: 50, width: 50, marginRight: 10 }}
					target="_blank"
				/>
				<SocialIcon
					url="https://github.com/joshdev8"
					style={{ height: 50, width: 50 }}
					target="_blank"
				/>
			</Box>
		</Box>
	);
}
