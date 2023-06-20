import { ValidationResult } from '../ValidationResult';
import Validator from '../Validator';

export default class RgbValueValidator implements Validator<number> {
  validate(value: number): ValidationResult {
    throw new Error('Method not implemented.');
  }
}
