import * as React from 'react';
import Hamburger from 'hamburger-react';
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	MenuItem,
	Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from '../Link';

const pages = ['home', 'projects', 'blog', 'contact'];

const ResponsiveAppBar = () => {
	// get current page path
	const { asPath } = useRouter();
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
							mr: '1.5rem',
						}}
					>
						<Link href="/" underline="none">
							<Button
								color="inherit"
								sx={{
									fontSize: '1.2rem',
									lineHeight: '2.75',
									padding: '6px 16px',
								}}
							>
								josh cain
							</Button>
						</Link>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
						}}
					>
						<IconButton
							size="large"
							aria-label="menu icon"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
							disableRipple
						>
							<Hamburger toggled={Boolean(anchorElNav)} />
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
									<Link href={path} key={page} underline="none">
										<MenuItem
											selected={asPath === path}
											onClick={handleCloseNavMenu}
											sx={{
												'&.MuiButton-root': {
													fontSize: '1.2rem',
													lineHeight: '2.75',
													padding: '6px 16px',
												},
											}}
										>
											{page}
										</MenuItem>
									</Link>
								);
							})}
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: 'flex', md: 'none' },
							justifyContent: 'flex-end',
						}}
					>
						<Button
							href="/"
							sx={{
								fontSize: '1.2rem',
								lineHeight: '2.75',
								padding: '6px 16px',
								textTransform: 'lowercase',
							}}
						>
							josh cain
						</Button>
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map(page => {
							const path = page === 'home' ? '/' : `/${page}`;
							return (
								<Link
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: 'white',
										display: 'block',
										fontSize: '1.2rem',
										lineHeight: '2.75',
										textTransform: 'lowercase',
									}}
									href={path}
									underline="none"
									key={path}
								>
									<Button
										color="inherit"
										sx={{
											fontSize: '1.2rem',
											lineHeight: '2.75',
											padding: '6px 16px',
											// add underline animation on hover
											'&:after': {
												content: '""',
												position: 'absolute',
												bottom: 0,
												left: 0,
												width: '100%',
												height: '2px',
												backgroundColor: 'white',
												transition: 'transform 0.3s ease',
												transform: 'scaleX(0)',
											},
											'&:hover:after': {
												transform: 'scaleX(1)',
											},
											// if current page, add underline
											...(asPath === path && {
												'&:after': {
													content: '""',
													position: 'absolute',
													bottom: 0,
													left: 0,
													width: '100%',
													height: '2px',
													backgroundColor: 'white',
													transition: 'transform 0.3s ease',
													transform: 'scaleX(1)',
												},
											}),
										}}
									>
										{page}
									</Button>
								</Link>
							);
						})}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
