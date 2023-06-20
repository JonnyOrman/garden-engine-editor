import { ValidationResult } from '../fields/ValidationResult';
import Validator from '../fields/Validator';
import Scene from './Scene';

export default class SceneValidator implements Validator<Scene> {
  constructor(private DimensionValidator: Validator<number>) {}

  validate(value: Scene): ValidationResult {
    const widthValidationResult = this.DimensionValidator.validate(value.width);

    if (widthValidationResult) {
      return widthValidationResult;
    }

    const heightValidationResult = this.DimensionValidator.validate(
      value.height
    );

    if (heightValidationResult) {
      return heightValidationResult;
    }

    return null;
  }
}
