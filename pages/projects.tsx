import * as React from 'react';
import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProjectCard from '../src/components/Card/ProjectCard';

const projects = [
	{
		projectUrl: 'https://greenstatebuildersvt.com',
		imageUrl: '/img/greenState.png',
		imageAlt: 'Green State Builders website image',
		title: 'Green State Builders',
		description: 'Company website - Built with: NextJS, Material UI, Vercel',
	},
	{
		projectUrl: 'https://limbcorp.com',
		imageUrl: '/img/limbScreen.png',
		imageAlt: 'Limb Corp website image',
		title: 'Limb Corp',
		description: 'Company website - Built with: NextJS, Material UI, Vercel',
	},
	{
		projectUrl: 'https://sunny-clock.com',
		imageUrl: '/img/sunnyClock.png',
		imageAlt: 'Always Sunny Clock image',
		title: 'Always Sunny Clock',
		description: 'Project I made for fun - Built with: React, Vercel',
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
				<Grid container spacing={2} sx={{ mt: 4 }}>
					{projects?.map(
						({ projectUrl, imageUrl, imageAlt, title, description }) => (
							<Grid key={title} item xs={6} md={4}>
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
