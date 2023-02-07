import Card from './Card';
import CardBody from './CardBody';
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
		<CardMedia component="img" height="200" image={imageUrl} alt={imageAlt} />
		<CardBody>
			<Typography gutterBottom variant="h5" component="div">
				{title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{description}
			</Typography>
		</CardBody>
		<CardActions>
			<Link
				href={projectUrl}
				rel="noopener noreferrer"
				target="_blank"
				variant="body1"
				underline="none"
				color="secondary"
			>
				<Button size="small" color="secondary">
					Visit
				</Button>
			</Link>
		</CardActions>
	</Card>
);

export default ProjectCard;
