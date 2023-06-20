import { ValidationResult } from '../ValidationResult';
import DimensionValidator from './DimensionValidator';

test('When it validates a value below the range then it produces an error', () => {
  runTest(-1, 'Must be between 1 and 100');
});

test('When it validates a value above the range then it produces an error', () => {
  runTest(101, 'Must be between 1 and 100');
});

test('When it validates a value at the lower limit then it does not produce an error', () => {
  runTest(1, null);
});

test('When it validates a value at the upper limit then it does not produce an error', () => {
  runTest(100, null);
});

const runTest = (
  Dimension: number,
  expectedValidationResult: ValidationResult
) => {
  const dimensionValidator = new DimensionValidator();

  const validationResult = dimensionValidator.validate(Dimension);

  expect(validationResult).toBe(expectedValidationResult);
};
