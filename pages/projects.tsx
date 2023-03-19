import type { NextPage } from 'next';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
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

const cardVariants = {
	offscreen: {
		y: 100,
		opacity: 0.2,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: 0.8,
		},
	},
};
const cardVariants2 = {
	...cardVariants,
	onscreen: {
		...cardVariants.onscreen,
		transition: {
			...cardVariants.onscreen.transition,
			duration: 1.5,
		},
	},
};

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
								<motion.div
									initial="offscreen"
									whileInView="onscreen"
									viewport={{ once: true, amount: 0.2 }}
								>
									<motion.div className="card" variants={cardVariants2}>
										<ProjectCard
											projectUrl={projectUrl}
											imageUrl={imageUrl}
											imageAlt={imageAlt}
											title={title}
											description={description}
										/>
									</motion.div>
								</motion.div>
							</Grid>
						)
					)}
				</Grid>
			</Box>
		</Container>
	);
};

export default Projects;
