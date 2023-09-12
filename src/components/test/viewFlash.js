import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ViewFlash from '../ViewFlash';
import { Provider } from 'react-redux'; // You may need to mock your Redux store

// Mock your Redux store (you can replace this with your actual store configuration)
const mockStore = {
  view: {
    name: 'Test Card',
    description: 'Test Description',
    terms: {
      '0': 'Term 1',
      '1': 'Term 2',
      '2': 'Term 3',
    },
    image2: 'test-image.jpg',
    difinition: 'Test Definition',
  },
  view2: {
    one: {
      tImg: {
        '0': 'image-1.jpg',
        '1': 'image-2.jpg',
        '2': 'image-3.jpg',
      },
    },
    two: {
      tDifinition: {
        '0': 'Definition 1',
        '1': 'Definition 2',
        '2': 'Definition 3',
      },
    },
  },
};

describe('ViewFlash Component', () => {
  beforeEach(() => {
    render(
      <Provider store={mockStore}>
        <ViewFlash />
      </Provider>
    );
  });

  it('renders the component', () => {
    // You can add more specific assertions based on your component's structure
    expect(screen.getByText('Test Card')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('displays flashcards and can select them', () => {
    fireEvent.click(screen.getByText('Term 1'));
    expect(screen.getByText('Test Definition')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Term 2'));
    expect(screen.getByText('Definition 2')).toBeInTheDocument();
  });

  it('handles printing', () => {
    const printButton = screen.getByText('Print');
    fireEvent.click(printButton);
    // You can add assertions related to printing behavior here.
  });

  // Add more test cases to cover other functionalities of your component
});
