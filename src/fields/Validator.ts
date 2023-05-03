import { ValidationResult } from './ValidationResult';

export default interface Validator<T> {
  validate(value: T): ValidationResult;
}
