import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FlashCard from './FlashCard'; // Import the component to be tested

describe('FlashCard Component', () => {
  it('renders the component', () => {
    render(<FlashCard />);
    // You can add more specific assertions based on your component's structure
    expect(screen.getByText('Create Group')).toBeInTheDocument();
  });

  it('adds a term when "Add More" button is clicked', () => {
    const { getByText } = render(<FlashCard />);
    const addMoreButton = getByText('+ Add More');
    fireEvent.click(addMoreButton);

    // You can assert that a new term element is added to the component
    expect(screen.getByText('Enter Term')).toBeInTheDocument();
  });

  // Add more test cases to cover other functionalities of your component
});
