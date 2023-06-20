import { ValidationResult } from '../ValidationResult';
import Validator from '../Validator';
import TwoDPoint from './TwoDPoint';

export default class TwoDPointValidator implements Validator<TwoDPoint> {
  validate(value: TwoDPoint): ValidationResult {
    return null;
  }
}
