import { render, screen } from '@testing-library/react';
import { within } from '@testing-library/dom';
import TechCard from './TechCard';

describe('TechCard', () => {
	it('should render component with all attributes', () => {
		render(
			<TechCard
				tech={{
					name: 'test',
					image: 'test.png',
					description: 'test description',
					url: 'https://github.com',
				}}
			/>,
		);
		expect(
			screen.getByRole('heading', {
				name: /test/i,
			}),
		).toHaveTextContent('test');

		const link = screen.getByRole('link', {
			name: /test description/i,
		});

		within(link).getByRole('heading', {
			name: /test/i,
		});

		expect(link).toHaveAttribute('href', 'https://github.com');

		expect(link).toHaveAttribute('target', '_blank');

		const image = within(link).getByRole('img');
		expect(image).toHaveAttribute('style', 'background-image: url(test.png);');
	});
});
