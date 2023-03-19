import type { NextPage } from 'next';
import { Box, Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../src/components/Card/ProjectCard';

const projects = [
	{
		projectUrl: 'https://greenstatebuildersvt.com',
		imageUrl: '/img/greenState.png',
		imageAlt: 'Green State Builders website image',
		title: 'Green State Builders',
		description: 'Company website - NextJS, Material UI, Vercel',
	},
	{
		projectUrl: 'https://limbcorp.com',
		imageUrl: '/img/limbScreen.png',
		imageAlt: 'Limb Corp website image',
		title: 'Limb Corp',
		description: 'Company website - NextJS, Material UI, Vercel',
	},
	{
		projectUrl: 'https://sunny-clock.com',
		imageUrl: '/img/sunnyClock.png',
		imageAlt: 'Always Sunny Clock image',
		title: 'Always Sunny Clock',
		description: 'Project I made for fun - React, Vercel',
	},
];

const Projects: NextPage = () => {
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
					Some recent projects I have been working on
				</Typography>
				<Grid container spacing={2} sx={{ mt: 2 }}>
					{projects?.map(
						({ projectUrl, imageUrl, imageAlt, title, description }) => (
							<Grid key={title} item xs={12} sm={6} md={4}>
								<ProjectCard
									projectUrl={projectUrl}
									imageUrl={imageUrl}
									imageAlt={imageAlt}
									title={title}
									description={description}
								/>
							</Grid>
						)
					)}
				</Grid>
			</Box>
		</Container>
	);
};

export default Projects;
