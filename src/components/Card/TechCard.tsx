import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Divider,
} from '@mui/material';
import Link from '../../../src/components/Link';

interface ITech {
	tech: {
		name: string;
		image: string;
		description: string;
		url: string;
	};
}

const TechCard = ({ tech: { name, image, description, url } }: ITech) => {
	return (
		<Link
			href={url}
			sx={{
				textDecoration: 'none',
			}}
			// open in new tab
			target="_blank"
		>
			<Card
				sx={{
					height: 150,
					width: 150,
					margin: 2,
					transition: '0.3s',
					boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
					textDecoration: 'none',
					'&:hover': {
						boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
					},
				}}
				aria-label={description}
			>
				<CardMedia
					image={image}
					sx={{
						pt: '56.25%',
					}}
				/>
				<CardContent
					sx={{
						textAlign: 'left',
						padding: 3,
					}}
				>
					<Typography
						sx={{ textDecoration: 'none', fontSize: '0.8rem' }}
						variant={'h6'}
						gutterBottom
					>
						{name}
					</Typography>
				</CardContent>
			</Card>
		</Link>
	);
};

export default TechCard;