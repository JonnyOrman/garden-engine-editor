import { ValidationResult } from '../ValidationResult';
import Validator from '../Validator';

export default class NameValidator implements Validator<string> {
  validate(value: string): ValidationResult {
    if (!value || value.length === 0) {
      return 'Name must be provided';
    }

    if (value.length > 100) {
      return 'Name cannot be more than 100 characters long';
    }

    return null;
  }
}
