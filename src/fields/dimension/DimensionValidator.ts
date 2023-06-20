import { ValidationResult } from '../ValidationResult';
import Validator from '../Validator';

export default class DimensionValidator implements Validator<number> {
  validate(value: number): ValidationResult {
    if (value > 100 || value < 1) {
      return 'Must be between 1 and 100';
    }

    return null;
  }
}
