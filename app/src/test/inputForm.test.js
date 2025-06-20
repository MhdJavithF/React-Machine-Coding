import InputForm from "../PS-practice/inputForm";
import { render, fireEvent, screen } from '@testing-library/react';

test('renders the input form with placeholder', () => {
  render(<InputForm />);
  const input = screen.getByPlaceholderText('abc@gmail.com');
  expect(input).toBeInTheDocument();
});

test('updates and displays value on button click', () => {
  render(<InputForm />);
  
  const input = screen.getByPlaceholderText('abc@gmail.com');
  const button = screen.getByText('click');
  
  // Change the input value
  fireEvent.change(input, { target: { value: 'hi' } });
  
  // Click the button
  fireEvent.click(button);
  
  // Check if "hi" is shown on screen
  expect(screen.getByText('hi')).toBeInTheDocument();
});