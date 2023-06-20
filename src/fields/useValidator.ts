import Validator from './Validator';
import DimensionValidator from './dimension/DimensionValidator';
import NameValidator from './name/NameValidator';
import RgbValidator from './rgb/RgbValidator';
import RgbValueValidator from './rgb/RgbValueValidator';
import ScaleValidator from './scale/ScaleValidator';
import TwoDPointValidator from './twoDPoint/TwoDPointValidator';

export const useValidator = <T>(fieldName: string): Validator<T> => {
  if (fieldName == 'Dimension') {
    return new DimensionValidator() as Validator<T>;
  }
  if (fieldName == 'Name') {
    return new NameValidator() as Validator<T>;
  }
  if (fieldName == 'Rgb') {
    return new RgbValidator() as Validator<T>;
  }
  if (fieldName == 'RgbValue') {
    return new RgbValueValidator() as Validator<T>;
  }
  if (fieldName == 'Scale') {
    return new ScaleValidator() as Validator<T>;
  }
  if (fieldName == 'TwoDPoint') {
    return new TwoDPointValidator() as Validator<T>;
  }

  throw new Error('no validator registered for ' + fieldName);
};

export default useValidator;
