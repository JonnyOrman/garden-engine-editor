import OnChangeHandler from './OnChangeHandler';
import { ValidationResult } from './ValidationResult';
import Validator from './Validator';

export default class ValidationOnChangeHandler<T>
  implements OnChangeHandler<T>
{
  constructor(private validator: Validator<T>) {}

  handle(
    newValue: T,
    setError: (validationResult: ValidationResult) => void,
    setValue: (value: T) => void,
    onChange: (value: T) => void
  ): void {
    const validationResult = this.validator.validate(newValue);

    if (!validationResult) {
      setError(null);
      setValue(newValue);
      onChange(newValue);
    } else {
      setError(validationResult);
    }
  }
}
