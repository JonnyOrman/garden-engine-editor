import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DimensionEditor from './DimensionEditor';
import React from 'react';
import '@testing-library/jest-dom';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

const value = '';

const error = null;

const handleChange = jest.fn();

const onChange = (newValue: number) => {};

jest.mock('../useValidatedChangeHandler', () => ({
  useValidatedChangeHandler: jest.fn(),
}));

(useValidatedChangeHandler as any).mockImplementation(() => [
  handleChange,
  value,
  error,
]);

test('When a value is entered then the change is handled', async () => {
  render(<DimensionEditor dimension="Width" onChange={onChange} />);

  const input = screen.getByLabelText('Width');

  await userEvent.type(input, '123');

  expect(handleChange).toHaveBeenNthCalledWith(1, 1);
  expect(handleChange).toHaveBeenNthCalledWith(2, 12);
  expect(handleChange).toHaveBeenNthCalledWith(3, 123);
  expect(input).toHaveValue(123);
});
