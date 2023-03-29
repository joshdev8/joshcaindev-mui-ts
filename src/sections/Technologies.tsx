import { Grid } from '@mui/material';
import { motion } from 'framer-motion';
import TechCard from '../components/Card/TechCard';
import { technologies } from '../data/technologies';
import { cardVariants, cardVariants2 } from '../animations/cards';

const Technologies = () => {
	return (
		<Grid
			container
			spacing={2}
			sx={{
				mt: 2,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{technologies.map((tech, index) => (
				<motion.div
					initial="offscreen"
					whileInView="onscreen"
					viewport={{ once: true, amount: 0.2 }}
					key={tech.name}
				>
					<motion.div
						className="card"
						variants={index % 2 ? cardVariants2 : cardVariants}
					>
						<TechCard tech={tech} />
					</motion.div>
				</motion.div>
			))}
		</Grid>
	);
};

export default Technologies;
