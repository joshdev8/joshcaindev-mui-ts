/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	webpack(config) {
		config.infrastructureLogging = { debug: /PackFileCache/ };
		return config;
	},
};

module.exports = nextConfig;
