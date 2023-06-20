import { mock } from 'jest-mock-extended';
import SceneValidator from './SceneValidator';
import Validator from '../fields/Validator';
import { ValidationResult } from '../fields/ValidationResult';

test('When it validates a scene with an invalid width then it produces an error', () => {
  runTest('Invalid width', null, 'Invalid width');
});

test('When it validates a scene with an invalid height then it produces an error', () => {
  runTest(null, 'Invalid height', 'Invalid height');
});

test('When it validates a scene with a valid width and height then it does not produce an error', () => {
  runTest(null, null, null);
});

const runTest = (
  widthValidationResult: ValidationResult,
  heightValidationResult: ValidationResult,
  expectedValidationResult: ValidationResult
) => {
  const width = 123;
  const height = 456;

  const scene = {
    width: width,
    height: height,
  };

  const DimensionValidator = mock<Validator<number>>();
  DimensionValidator.validate
    .calledWith(123)
    .mockReturnValue(widthValidationResult);
  DimensionValidator.validate
    .calledWith(456)
    .mockReturnValue(heightValidationResult);

  const sceneValidator = new SceneValidator(DimensionValidator);

  const validationResult = sceneValidator.validate(scene);

  expect(validationResult).toBe(expectedValidationResult);
};
