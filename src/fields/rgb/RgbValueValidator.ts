import { ValidationResult } from '../ValidationResult';
import Validator from '../Validator';

export default class RgbValueValidator implements Validator<number> {
  validate(value: number): ValidationResult {
    if (value < 0 || value > 1) {
      return 'Value must be between 0 and 1';
    }

    return null;
  }
}
