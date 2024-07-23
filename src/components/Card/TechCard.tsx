import { Card, CardMedia } from '@mui/material';
import Image from 'next/image';
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
					height: 60,
					width: 75,
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
				aria-label={description}
			>
				<CardMedia
					sx={{
						pt: '60%',
						m: 1,
						backgroundSize: 'cover',
						position: 'relative',
					}}
				>
					<Image src={image} alt={name} fill />
				</CardMedia>
			</Card>
		</Link>
	);
};

export default TechCard;
