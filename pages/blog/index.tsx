import { Grid, Box, Container } from '@mui/material';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogCard from '../../src/components/Blog/BlogCard';

interface Props {
	posts: {
		slug: string;
		frontmatter: {
			title: string;
			date: string;
			excerpt: string;
			cover_image: string;
		};
	}[];
}

const Blog = ({ posts }: Props) => {
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
				<Grid container spacing={2} sx={{ mt: 2 }}>
					{posts.map((post, index) => (
						<Box key={post.frontmatter.title}>
							<BlogCard post={post} />
						</Box>
					))}
				</Grid>
			</Box>
		</Container>
	);
};

export async function getStaticProps() {
	// grab all files in the public/posts directory
	const files = fs.readdirSync(path.join('public', 'posts'));

	// get slug and frontmatter from md files
	const posts = files.map(filename => {
		// create slug
		const slug = filename.replace('.md', '');

		// get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join('public', 'posts', filename),
			'utf-8'
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
}

export default Blog;
