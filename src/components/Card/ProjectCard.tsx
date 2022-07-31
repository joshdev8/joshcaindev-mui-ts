import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
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
	<Card sx={{ maxWidth: 345 }}>
		<CardActionArea>
			<CardMedia component="img" height="200" image={imageUrl} alt={imageAlt} />
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
		</CardActionArea>
		<CardActions>
			<Link
				href={projectUrl}
				rel="noopener noreferrer"
				target="_blank"
				variant="body1"
				underline="none"
				color="secondary"
			>
				<Button size="small" color="primary">
					Visit
				</Button>
			</Link>
		</CardActions>
	</Card>
);

export default ProjectCard;
