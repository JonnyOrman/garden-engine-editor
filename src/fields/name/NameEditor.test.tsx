import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NameEditor from './NameEditor';
import React from 'react';
import '@testing-library/jest-dom';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

const value = '';

const error = null;

const handleChange = jest.fn();

const onChange = (newValue: string) => {};

jest.mock('../useValidatedChangeHandler', () => ({
  useValidatedChangeHandler: jest.fn(),
}));

(useValidatedChangeHandler as any).mockImplementation(() => [
  handleChange,
  value,
  error,
]);

test('When a value is entered then the change is handled', async () => {
  render(<NameEditor onChange={onChange} />);

  const input = screen.getByLabelText('Name');

  await userEvent.type(input, 'abc');

  expect(handleChange).toHaveBeenNthCalledWith(1, 'a');
  expect(handleChange).toHaveBeenNthCalledWith(2, 'ab');
  expect(handleChange).toHaveBeenNthCalledWith(3, 'abc');
  expect(input).toHaveValue('abc');
});
