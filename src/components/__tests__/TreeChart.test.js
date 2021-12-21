import {render, screen} from '@testing-library/react';
import {initialData} from "../../mocks/roadmap";
import {TreeChart} from "../TreeChart";

describe('TreeChart component testing', () => {

	beforeEach(() => {
		jest.resetAllMocks();
	})

	test('should render description', () => {
		//Arrange
		render(<TreeChart data={initialData} />);
		//Act
		const description = screen.getByText(/treechart here/i);
		//Assert
		expect(description).toBeInTheDocument();
	});
})
