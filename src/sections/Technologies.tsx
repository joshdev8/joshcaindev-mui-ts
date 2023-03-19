import { Box, Grid } from '@mui/material';
import TechCard from '../components/Card/TechCard';
import { technologies } from '../data/technologies';

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
			{technologies.map(tech => (
				<Box key={tech.name}>
					<TechCard tech={tech} />
				</Box>
			))}
		</Grid>
	);
};

export default Technologies;
