import RgbValidator from './RgbValidator';
import { ValidationResult } from './ValidationResult';

test('When it validates a red value below the valid range then it produces an error', () => {
  runTest(-0.1, 0, 0, 'R must be between 0 and 1');
});

test('When it validates a red value above the valid range then it produces an error', () => {
  runTest(1.1, 0, 0, 'R must be between 0 and 1');
});

test('When it validates a green value below the valid range then it produces an error', () => {
  runTest(0, -0.1, 0, 'G must be between 0 and 1');
});

test('When it validates a green value above the valid range then it produces an error', () => {
  runTest(0, 1.1, 0, 'G must be between 0 and 1');
});

test('When it validates a blue value below the valid range then it produces an error', () => {
  runTest(0, 0, -0.1, 'B must be between 0 and 1');
});

test('When it validates a blue value above the valid range then it produces an error', () => {
  runTest(0, 0, 1.1, 'B must be between 0 and 1');
});

test('When it validates a valid RGB then it does not produce an error', () => {
  runTest(0, 0, 1, null);
});

const runTest = (
  r: number,
  g: number,
  b: number,
  expectedValidationResult: ValidationResult
) => {
  const rgbValidator = new RgbValidator();

  const validationResult = rgbValidator.validate({
    r: r,
    g: g,
    b: b,
  });

  expect(validationResult).toBe(expectedValidationResult);
};
