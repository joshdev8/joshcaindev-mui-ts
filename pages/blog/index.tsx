import { Grid, Box, Container } from '@mui/material';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { motion } from 'framer-motion';
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

const Blog = ({ posts }: Props) => {
	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Grid
					container
					spacing={2}
					sx={{
						mt: 2,
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignItems: 'center',
						p: 2,
					}}
				>
					{posts.map(post => (
						<motion.div
							initial="offscreen"
							whileInView="onscreen"
							viewport={{ once: true, amount: 0.2 }}
							key={post.frontmatter.title}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.9 }}
						>
							<motion.div className="card" variants={cardVariants2}>
								<Box>
									<BlogCard post={post} />
								</Box>
							</motion.div>
						</motion.div>
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
