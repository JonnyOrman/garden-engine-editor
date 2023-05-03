import TwoDPoint from './TwoDPoint';
import { ValidationResult } from './ValidationResult';
import Validator from './Validator';

export default class TwoDPointValidator implements Validator<TwoDPoint> {
  validate(value: TwoDPoint): ValidationResult {
    return null;
  }
}
