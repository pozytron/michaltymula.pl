import {render, screen} from '@testing-library/react';
import {initialData} from "./mocks/roadmap";
import {Roadmap} from "./sections/Roadmap";
import userEvent from "@testing-library/user-event";

describe('Roadmap section testing', () => {

	beforeEach(() => {
		jest.resetAllMocks();
	})

	test('should render section title header', () => {
		//Arrange
		const onUpdateCallbackMock = jest.fn();
		render(<Roadmap data={initialData} onUpdate={onUpdateCallbackMock}/>);
		//Act
		const sectionTitle = screen.getByText(/following roadmap/i);
		//Assert
		expect(sectionTitle).toBeInTheDocument();
	});

	test('should render button and call mocked function on click', () => {
		// Arrange
		const onUpdateCallbackMock = jest.fn();
		render(<Roadmap data={initialData} onUpdate={onUpdateCallbackMock}/>);
		//Act
		const roadmapUpdateButton = screen.getByRole("button",/update roadmap/i);
		userEvent.click(roadmapUpdateButton)
		//Assert
		expect(roadmapUpdateButton).toBeInTheDocument();
		expect(onUpdateCallbackMock).toHaveBeenCalledTimes(1);
	});
})
