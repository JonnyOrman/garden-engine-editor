import { ValidationResult } from '../ValidationResult';
import ScaleValidator from './ScaleValidator';

test('When it validates a value below the lower limit then it produces an error', () => {
  runTest(-1, 'Scale must be above 0');
});

test('When it validates a value at the lower limit then it does not produce an error', () => {
  runTest(0, null);
});

const runTest = (
  Dimension: number,
  expectedValidationResult: ValidationResult
) => {
  const scaleValidator = new ScaleValidator();

  const validationResult = scaleValidator.validate(Dimension);

  expect(validationResult).toBe(expectedValidationResult);
};
