import {
	CardMedia,
	Typography,
	Card,
	CardContent,
	CardActions,
	Button,
} from '@mui/material';
import Image from 'next/image';
import Link from '../Link';

interface Props {
	projectUrl: string;
	imageUrl: string;
	imageAlt: string;
	title: string;
	description: string;
	privateRepo: boolean;
	repoLink: string;
}

const ProjectCard = ({
	projectUrl,
	imageUrl,
	imageAlt,
	title,
	description,
	privateRepo,
	repoLink,
}: Props) => (
	<Card
		sx={{
			maxWidth: 500,
			margin: 2,
			transition: '0.3s',
			boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
			textDecoration: 'none',
			borderRadius: '10px',
			'&:hover': {
				boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
				scale: 1.1,
			},
		}}
	>
		<Link href={projectUrl} style={{ textDecoration: 'none' }} target="_blank">
			<CardMedia
				sx={{
					pt: '56.25%',
					textDecoration: 'none',
					backgroundPosition: 'initial',
					position: 'relative',
				}}
				aria-label={imageAlt}
			>
				<Image src={imageUrl} alt={imageAlt} fill />
			</CardMedia>
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
					sx={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}
					variant={'body2'}
				>
					{description ?? 'No description'}
				</Typography>
			</CardContent>
		</Link>
		<CardActions>
			<Link href={repoLink} style={{ textDecoration: 'none' }} target="_blank">
				<Button
					size="large"
					color="primary"
					sx={{ fontWeight: 'bold' }}
					disabled={privateRepo}
				>
					Github {privateRepo ? '🔒' : ''}
				</Button>
			</Link>
			<Link
				href={projectUrl}
				style={{ textDecoration: 'none' }}
				target="_blank"
			>
				<Button size="large" color="warning" sx={{ fontWeight: 'bold' }}>
					Visit
				</Button>
			</Link>
		</CardActions>
	</Card>
);

export default ProjectCard;
