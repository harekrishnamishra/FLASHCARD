import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FlashCardList from './FlashCardList';
import { Provider } from 'react-redux'; // You may need to mock your Redux store

// Mock your Redux store (you can replace this with your actual store configuration)
const mockStore = {
  flash: [
    {
      name: 'Test Card 1',
      description: 'Test Description 1',
      image: 'test-image-1.jpg',
    },
    {
      name: 'Test Card 2',
      description: 'Test Description 2',
      image: 'test-image-2.jpg',
    },
  ],
  truefalse: false,
};

describe('FlashCardList Component', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <FlashCardList />
      </Provider>
    );
  });

  it('renders the component', () => {
    // You can add more specific assertions based on your component's structure
    expect(screen.getByText('Test Card 1')).toBeInTheDocument();
    expect(screen.getByText('Test Card 2')).toBeInTheDocument();
  });

  it('displays an empty list message if there are no items', () => {
    const emptyStore = {
      flash: [],
      truefalse: false,
    };

    render(
      <Provider store={emptyStore}>
        <FlashCardList />
      </Provider>
    );

    expect(screen.getByText('Empty list, Please Create your Card...!')).toBeInTheDocument();
  });

  it('dispatches the "viewAdd" action when "View Cards" button is clicked', () => {
    const viewHandleMock = jest.fn();
    const mockStoreWithViewHandle = {
      flash: [
        {
          name: 'Test Card 1',
          description: 'Test Description 1',
          image: 'test-image-1.jpg',
        },
      ],
      truefalse: false,
    };

    render(
      <Provider store={mockStoreWithViewHandle}>
        <FlashCardList viewHandle={viewHandleMock} />
      </Provider>
    );

    const viewButton = screen.getByText('View Cards');
    fireEvent.click(viewButton);

    expect(viewHandleMock).toHaveBeenCalledWith({
      name: 'Test Card 1',
      description: 'Test Description 1',
      image: 'test-image-1.jpg',
    });
  });

  // Add more test cases to cover other functionalities of your component
});
