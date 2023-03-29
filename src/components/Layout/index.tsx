import { motion } from 'framer-motion';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
		transition={{ duration: 0.8, ease: 'easeInOut' }}
	>
		{children}
	</motion.div>
);

export default Layout;
