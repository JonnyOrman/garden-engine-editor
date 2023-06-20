import { useEffect, useState } from 'react';
import useValidator from './useValidator';

export const useValidatedPropertyChangeHandler = <T, TProperty>(
  fieldName: string,
  onChange: (value: T) => void,
  defaultValue: T
): [
  (
    newPropertyValue: TProperty,
    constructNewValue: (newPropertyValue: TProperty) => T
  ) => void,
  T,
  string | null
] => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const validator = useValidator(fieldName);

  const handleChange = (
    newPropertyValue: TProperty,
    constructNewValue: (newPropertyValue: TProperty) => T
  ) => {
    const newValue = constructNewValue(newPropertyValue);

    const validationResult = validator.validate(newValue);

    if (!validationResult) {
      setValue(newValue);
      setError(null);
    } else {
      setError('invalid value');
    }
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return [handleChange, value, error];
};
