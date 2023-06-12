import OnChangeHandler from './OnChangeHandler';
import Validator from './Validator';

export default class ValidationOnChangeHandler<T>
  implements OnChangeHandler<T>
{
  constructor(private validator: Validator<T>) {}

  handle(newValue: T, onChange: (value: T) => void): void {
    const validationResult = this.validator.validate(newValue);

    if (!validationResult) {
      onChange(newValue);
    }
  }
}
