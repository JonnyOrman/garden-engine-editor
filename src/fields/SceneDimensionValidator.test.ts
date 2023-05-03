import SceneDimensionValidator from './SceneDimensionValidator';
import { ValidationResult } from './ValidationResult';

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
  sceneDimension: number,
  expectedValidationResult: ValidationResult
) => {
  const sceneDimensionValidator = new SceneDimensionValidator();

  const validationResult = sceneDimensionValidator.validate(sceneDimension);

  expect(validationResult).toBe(expectedValidationResult);
};
