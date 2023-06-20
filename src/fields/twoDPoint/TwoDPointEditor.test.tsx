import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TwoDPointEditor from './TwoDPointEditor';
import React from 'react';
import '@testing-library/jest-dom';
import { useValidatedPropertyChangeHandler } from '../useValidatedPropertyChangeHandler';
import TwoDPoint from './TwoDPoint';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

const value = '';

const error = null;

const handleChange = jest.fn();

const onChange = (newValue: TwoDPoint) => {};

jest.mock('../useValidatedPropertyChangeHandler', () => ({
  useValidatedPropertyChangeHandler: jest.fn(),
}));

(useValidatedPropertyChangeHandler as any).mockImplementation(() => [
  handleChange,
  value,
  error,
]);

jest.mock('../useValidatedChangeHandler', () => ({
  useValidatedChangeHandler: jest.fn(),
}));

(useValidatedChangeHandler as any).mockImplementation(() => [
  handleChange,
  value,
  error,
]);

test('When a value is entered then the change is handled', async () => {
  render(<TwoDPointEditor onChange={onChange} />);

  const xInput = screen.getByLabelText('X');

  await userEvent.type(xInput, '123');

  const yInput = screen.getByLabelText('Y');

  await userEvent.type(yInput, '456');

  expect(handleChange).toHaveBeenNthCalledWith(1, 1);
  expect(handleChange).toHaveBeenNthCalledWith(2, 12);
  expect(handleChange).toHaveBeenNthCalledWith(3, 123);
  expect(handleChange).toHaveBeenNthCalledWith(4, 4);
  expect(handleChange).toHaveBeenNthCalledWith(5, 45);
  expect(handleChange).toHaveBeenNthCalledWith(6, 456);
  expect(xInput).toHaveValue(123);
  expect(yInput).toHaveValue(456);
});
