import NameValidator from './NameValidator';
import { ValidationResult } from './ValidationResult';

test('When it validates an empty name then it produces an error', () => {
  runTest('', 'Name must be provided');
});

test('When it validates a name that is too long then it produces an error', () => {
  runTest(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'Name cannot be more than 100 characters long'
  );
});

test('When it validates a valid name then it does not produce an error', () => {
  runTest(
    'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    null
  );
});

const runTest = (name: string, expectedValidationResult: ValidationResult) => {
  const nameValidator = new NameValidator();

  const validationResult = nameValidator.validate(name);

  expect(validationResult).toBe(expectedValidationResult);
};
