import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/components/Link';
import Layout from '../src/components/Layout';

const Success: NextPage = () => {
	return (
		<Layout>
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
						Thank you for your message.
					</Typography>
					<Box maxWidth="sm">
						<Button variant="contained" component={Link} noLinkStyle href="/">
							Go to the home page
						</Button>
					</Box>
				</Box>
			</Container>
		</Layout>
	);
};

export default Success;
