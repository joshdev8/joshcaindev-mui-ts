import {
	Card,
	CardMedia,
	CardContent,
	Typography,
	Divider,
} from '@mui/material';
import Link from '../Link';

interface IPost {
	post: {
		slug: string;
		frontmatter: {
			title: string;
			date: string;
			excerpt: string;
			cover_image: string;
		};
	};
}

const BlogCard = ({ post }: IPost) => {
	const { title, excerpt, date, cover_image } = post.frontmatter;

	return (
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
			<Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
				<CardMedia
					image={
						cover_image ??
						'https://images.unsplash.com/photo-1517436073-3b1b1b7f8d9c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMHBob25lfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80'
					}
					sx={{
						pt: '56.25%',
						textDecoration: 'none',
					}}
				/>
				<CardContent
					sx={{
						textAlign: 'left',
						padding: 3,
						textDecoration: 'none',
					}}
				>
					<Typography
						sx={{
							fontWeight: 'bold',
							textDecoration: 'none',
						}}
						variant={'h6'}
						gutterBottom
					>
						{title ?? 'No title'}
					</Typography>
					<Typography
						sx={{ color: 'text.secondary', textDecoration: 'none' }}
						variant={'caption'}
					>
						{excerpt ?? 'No excerpt'}
					</Typography>
					<Divider sx={{ my: 2 }} light />
					<Typography
						sx={{ color: 'text.secondary', textDecoration: 'none' }}
						variant={'caption'}
						component={'p'}
					>
						{date ?? 'No date'}
					</Typography>
				</CardContent>
			</Link>
		</Card>
	);
};

export default BlogCard;
