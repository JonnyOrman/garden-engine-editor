import { ValidationResult } from '../ValidationResult';
import Validator from '../Validator';

export default class ScaleValidator implements Validator<number> {
  validate(value: number): ValidationResult {
    if (value < 0) {
      return 'Scale must be above 0';
    }

    return null;
  }
}
