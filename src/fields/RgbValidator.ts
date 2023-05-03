import { ValidationResult } from './ValidationResult';
import Validator from './Validator';
import Rgb from './Rgb';

export default class RgbValidator implements Validator<Rgb> {
  validate(value: Rgb): ValidationResult {
    if (value.r < 0 || value.r > 1) {
      return 'R must be between 0 and 1';
    }
    if (value.g < 0 || value.g > 1) {
      return 'G must be between 0 and 1';
    }
    if (value.b < 0 || value.b > 1) {
      return 'B must be between 0 and 1';
    }

    return null;
  }
}
