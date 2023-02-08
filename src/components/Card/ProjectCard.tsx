import { CardMedia, Typography, Card, CardContent } from '@mui/material';
import Link from '../Link';

interface Props {
	projectUrl: string;
	imageUrl: string;
	imageAlt: string;
	title: string;
	description: string;
}

const ProjectCard = ({
	projectUrl,
	imageUrl,
	imageAlt,
	title,
	description,
}: Props) => (
	<Card
		sx={{
			maxWidth: 500,
			margin: 2,
			transition: '0.3s',
			boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
			textDecoration: 'none',
			'&:hover': {
				boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.7)',
			},
		}}
	>
		<Link
			href={projectUrl}
			style={{ textDecoration: 'none' }}
			// open in new tab
			target="_blank"
		>
			<CardMedia
				image={
					imageUrl ??
					'https://images.unsplash.com/photo-1517436073-3b1b1b7f8d9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'
				}
				sx={{
					pt: '56.25%',
					textDecoration: 'none',
				}}
				aria-label={imageAlt}
			/>
			<CardContent
				sx={{
					textAlign: 'left',
					padding: 3,
					textDecoration: 'none',
				}}
			>
				<Typography
					sx={{ fontWeight: 'bold', textDecoration: 'none' }}
					variant={'h6'}
					gutterBottom
				>
					{title ?? 'No title'}
				</Typography>
				<Typography
					sx={{ color: 'text.secondary', textDecoration: 'none' }}
					variant={'caption'}
				>
					{description ?? 'No excerpt'}
				</Typography>
			</CardContent>
		</Link>
	</Card>
);

export default ProjectCard;
