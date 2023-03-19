import { Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { purple, green } from '@mui/material/colors';

export const montserrat = Montserrat({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			light: purple[300],
			main: purple[500],
			dark: purple[700],
		},
		secondary: {
			light: green[300],
			main: green[500],
			dark: green[700],
		},
	},
	typography: {
		fontFamily: montserrat.style.fontFamily,
	},
});

export default theme;
