import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from '../Link';

const pages = ['home', 'projects', 'blog', 'contact'];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{
							fontWeight: 'bold',
							display: { xs: 'none', md: 'flex' },
							mr: '1.5rem'
						}}
					>
						josh cain
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="menu icon"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map(page => {
								const path = page === 'home' ? '/' : `/${page}`;
								return (
									<MenuItem
										onClick={handleCloseNavMenu}
										sx={{
											'&.MuiButton-root': {
												fontSize: '1.2rem',
												lineHeight: '2.75',
												padding: '6px 16px',
											},
										}}
										key={page}
									>
										<Link href={path} underline="none">
											{page}
										</Link>
									</MenuItem>
								);
							})}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						josh cain
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => {
							const path = page === 'home' ? '/' : `/${page}`;
							return (
								<MenuItem key={path}>
									<Link
										onClick={handleCloseNavMenu}
										sx={{
											my: 2,
											color: 'white',
											display: 'block',
											fontSize: '1.2rem',
											lineHeight: '2.75',
											padding: '6px 16px',
											// lowercase
											textTransform: 'lowercase',
										}}
										href={path}
										underline="none"
									>
										{page}
									</Link>
								</MenuItem>
							);
						})}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
