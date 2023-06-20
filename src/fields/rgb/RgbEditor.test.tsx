import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RgbEditor from './RgbEditor';
import React from 'react';
import '@testing-library/jest-dom';
import { useValidatedPropertyChangeHandler } from '../useValidatedPropertyChangeHandler';
import Rgb from './Rgb';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

const value = '';

const error = null;

const handleChange = jest.fn();

const onChange = (newValue: Rgb) => {};

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
  render(<RgbEditor onChange={onChange} />);

  const rInput = screen.getByLabelText('R');

  await userEvent.type(rInput, '1');

  const gInput = screen.getByLabelText('G');

  await userEvent.type(gInput, '0.5');

  const bInput = screen.getByLabelText('B');

  await userEvent.type(bInput, '0.25');

  expect(handleChange).toHaveBeenNthCalledWith(1, 1);
  expect(handleChange).toHaveBeenNthCalledWith(2, 0);
  expect(handleChange).toHaveBeenNthCalledWith(3, 0.5);
  expect(handleChange).toHaveBeenNthCalledWith(4, 0);
  expect(handleChange).toHaveBeenNthCalledWith(5, 0.2);
  expect(handleChange).toHaveBeenNthCalledWith(6, 0.25);
  expect(rInput).toHaveValue(1);
  expect(gInput).toHaveValue(0.5);
  expect(bInput).toHaveValue(0.25);
});
