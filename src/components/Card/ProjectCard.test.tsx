import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';

describe('ProjectCard', () => {
	it('should render successfully', () => {
		// Mock useRouter
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');
		mockUseRouter.mockImplementation(() => ({
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
		}));

		expect(() => {
			render(
				<ProjectCard
					projectUrl="/test.htm"
					imageUrl="test.png"
					imageAlt="test-alt"
					title="test-title"
					description="test-description"
					privateRepo={false}
					repoLink="https://github.com"
				/>
			);
		}).not.toThrow();
	});

	it('should render component with all attributes', () => {
		// Mock useRouter
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const mockUseRouter = jest.spyOn(require('next/router'), 'useRouter');
		mockUseRouter.mockImplementation(() => ({
			route: '/',
			pathname: '',
			query: '',
			asPath: '',
		}));

		render(
			<ProjectCard
				projectUrl="/test.htm"
				imageUrl="test.png"
				imageAlt="test-alt"
				title="test-title"
				description="test-description"
				privateRepo={false}
				repoLink="https://github.com"
			/>
		);
		expect(
			screen.getByRole('heading', {
				name: /test-title/i,
			})
		).toHaveTextContent('test-title');

		expect(
			screen.getByRole('img', {
				name: /test-alt/i,
			})
		).toBeVisible();

		expect(
			screen.getByRole('link', {
				name: /test-title/i,
			})
		).toHaveAttribute('href', '/test.htm');

		expect(
			screen.getByRole('link', {
				name: /github/i,
			})
		).toHaveAttribute('href', 'https://github.com');

		expect(screen.getByText(/test-description/i)).toBeVisible();
	});
});
