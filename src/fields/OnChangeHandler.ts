import { ValidationResult } from './ValidationResult';

export default interface OnChangeHandler<T> {
  handle(
    newValue: T,
    setError: (validationResult: ValidationResult) => void,
    setValue: (value: T) => void,
    onChange: (value: T) => void
  ): void;
}
