import type { NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';
import Layout from '../src/components/Layout';
import Technologies from '../src/sections/Technologies';

const Home: NextPage = () => {
	return (
		<Layout>
			<Container
				maxWidth="lg"
				sx={{
					p: 2,
				}}
			>
				{/* Hero */}
				<Box sx={{ my: 4 }}>
					<Typography variant="h4" component="h1" gutterBottom>
						Hi, I&apos;m Josh.
					</Typography>
					<Typography variant="h6" component="h2" gutterBottom>
						I&apos;m a user interface engineer with a passion for building
						modern and efficient web applications.
					</Typography>
				</Box>
				{/* About */}
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography variant="body1" component="h4" gutterBottom>
						I specialize in using React and NextJS to bring ideas to life. With
						a focus on serverless full-stack development, I have a deep
						understanding of how to create seamless and scalable web experiences
						that meet the needs of both users and businesses. Whether it&apos;s
						through intuitive design, smooth navigation, or cutting-edge
						technology, I strive to create applications that provide real value
						to users and deliver results for businesses. Take a look around to
						see some of my latest projects and learn more about my skills and
						experience.
					</Typography>
				</Box>
				{/* Favorite Technologies */}
				<Box sx={{ my: 4 }}>
					<Typography variant="h5" component="h2" gutterBottom>
						Favorite Technologies
					</Typography>
					<Technologies />
				</Box>
			</Container>
		</Layout>
	);
};

export default Home;
