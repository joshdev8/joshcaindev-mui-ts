import type { NextPage } from 'next';
import { Box, Container, Typography } from '@mui/material';
import { SocialIcon } from 'react-social-icons';

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
				<Typography variant="h6" component="h3" gutterBottom>
					Welcome to my portfolio site! As a user interface engineer with a
					passion for building modern and efficient web applications, I
					specialize in using React and NextJS to bring ideas to life. With a
					focus on serverless full-stack development, I have a deep
					understanding of how to create seamless and scalable web experiences
					that meet the needs of both users and businesses. Whether it's through
					intuitive design, smooth navigation, or cutting-edge technology, I
					strive to create applications that provide real value to users and
					deliver results for businesses. Take a look around to see some of my
					latest projects and learn more about my skills and experience.
				</Typography>
			</Box>
			{/* add social icons */}
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
		</Container>
	);
};

export default Home;
