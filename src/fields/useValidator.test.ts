import { renderHook } from '@testing-library/react';
import useValidator from './useValidator';

it.each(['Dimension', 'Name', 'Rgb', 'RgbValue', 'Scale', 'TwoDPoint'])(
  'gets the %p validator',
  (field: string) => {
    const { result } = renderHook(() => useValidator(field));

    expect(result).toBeTruthy();
  }
);

it('Errors when it does not find a validator', () => {
  const test = () => {
    renderHook(() => useValidator('InvalidField'));
  };

  expect(test).toThrow(new Error('no validator registered for InvalidField'));
});
