import type { NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';
import Link from '../src/components/Link';

const Home: NextPage = () => {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4" component="h1" gutterBottom>
					Josh Cain Dev Portfolio
				</Typography>
				<SocialIcon url="https://linkedin.com/in/joshcain8" />
				<SocialIcon url="https://github.com/joshdev8" />
			</Box>
		</Container>
	);
};

export default Home;
