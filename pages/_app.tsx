import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import ResponsiveAppBar from '../src/components/AppBar/AppBar';
import Copyright from '../src/components/Copyright';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../src/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<title>Josh Cain - UI Engineer</title>
				<meta name="description" content="Josh Cain - Portfolio Site" />
			</Head>
			<ThemeProvider theme={theme}>
				<ResponsiveAppBar />
				<AnimatePresence mode="wait" initial={false}>
					<Component {...pageProps} />
				</AnimatePresence>
				<Copyright />
				<Analytics />
			</ThemeProvider>
		</CacheProvider>
	);
}
