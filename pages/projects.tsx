import type { NextPage } from 'next';
import { Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../src/components/Card/ProjectCard';

const projects = [
	{
		projectUrl: 'https://greenstatebuildersvt.com',
		imageUrl: '/img/greenState.png',
		imageAlt: 'Green State Builders website image',
		title: 'Green State Builders',
		description:
			'Local home renovation business website - NextJS, Material UI, Vercel',
		privateRepo: true,
		repoLink: ''
	},
	{
		projectUrl: 'https://limbcorp.com',
		imageUrl: '/img/limbScreen.png',
		imageAlt: 'Limb Corp website image',
		title: 'Limb Corp',
		description:
			'Local residential and commercial window blinds business website - NextJS, Material UI, Vercel',
		privateRepo: true,
		repoLink: ''
	},
	{
		projectUrl: 'https://sunny-clock.com',
		imageUrl: '/img/sunnyClock.png',
		imageAlt: 'Always Sunny Clock image',
		title: 'Always Sunny Clock',
		description:
			'Project I made for fun, just a functional clock in the style of the Its Always Sunny in Philadelphia title text - React, Vercel',
		privateRepo: false,
		repoLink: 'https://github.com/joshdev8/always-sunny-clock',
	},
	{
		projectUrl: 'https://this-app-is-garbage.vercel.app',
		imageUrl: '/img/garbageApp.png',
		imageAlt: 'This App Is Garbage image',
		title: 'This App Is Garbage',
		description:
			'Project I made for a day-long hackathon. The app allows users to search for an item they would like to dispose of, and tells them if it is recyclable, compostable, or if it needs to be disposed of another way. - NextJS, Material UI, Vercel',
		privateRepo: false,
		repoLink: 'https://github.com/joshdev8/this-app-is-garbage',
	},
	{
		projectUrl: 'https://joshcaindev.com',
		imageUrl: '/img/portfolio.png',
		imageAlt: 'Portfolio website image',
		title: 'Portfolio Website',
		description:
			'This website! WORK IN PROGRESS - NextJS, Material UI, Vercel, Framer Motion',
		privateRepo: false,
		repoLink: 'https://github.com/joshdev8/joshcaindev-mui-ts',
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
		<Container
			maxWidth="lg"
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
					(
						{
							projectUrl,
							imageUrl,
							imageAlt,
							title,
							description,
							privateRepo,
							repoLink,
						},
						index
					) => (
						<Grid key={title} item xs={12} sm={12} md={6}>
							<motion.div
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, amount: 0.2 }}
							>
								<motion.div
									className="card"
									variants={index % 2 ? cardVariants2 : cardVariants}
								>
									<ProjectCard
										projectUrl={projectUrl}
										imageUrl={imageUrl}
										imageAlt={imageAlt}
										title={title}
										description={description}
										privateRepo={privateRepo}
										repoLink={repoLink}
									/>
								</motion.div>
							</motion.div>
						</Grid>
					)
				)}
			</Grid>
		</Container>
	);
};

export default Projects;
