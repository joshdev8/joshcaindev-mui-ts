// blog post page
import { Box, Container, Typography, Card } from '@mui/material';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import Link from '../../src/components/Link';

interface Props {
	frontmatter: {
		title: string;
		date: string;
		excerpt: string;
		cover_image: string;
	};
	slug: string;
	content: string;
}

const BlogPost = ({
	frontmatter: { title, date, cover_image },
	slug,
	content,
}: Props) => {
	return (
		<Container maxWidth="lg">
			{/* add card background with box shadow */}
			<Card
				sx={{
					my: 4,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					p: 4,
				}}
			>
				<Box
					sx={{
						my: 4,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						p: 4,
					}}
				>
					<Typography
						variant="h4"
						component="h1"
						gutterBottom
						sx={{
							mt: 4,
							mb: 4,
							fontSize: '2.5rem',
							fontWeight: 'bold',
							textAlign: 'center',
						}}
					>
						{title}
					</Typography>
					<Typography
						variant="subtitle1"
						gutterBottom
						sx={{
							mb: 4,
							fontSize: '1rem',
							textAlign: 'center',
						}}
					>
						{date}
					</Typography>
					<Image src={cover_image} alt={title} width={500} height={400} />
					<Box
						sx={{
							my: 4,
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Typography
							variant="body1"
							component="div"
							sx={{ mt: 4, mb: 4, fontSize: '1.2rem', p: 4 }}
							dangerouslySetInnerHTML={{ __html: marked(content) }}
						/>
						<Link href="/blog">Go Back</Link>
					</Box>
				</Box>
			</Card>
		</Container>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('public', 'posts'));
	const paths = files.map(filename => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const markdownWithMeta = fs.readFileSync(
		path.join('public', 'posts', slug + '.md'),
		'utf-8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			frontmatter,
			slug,
			content,
		},
	};
}

export default BlogPost;
