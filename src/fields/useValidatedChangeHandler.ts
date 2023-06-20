import { Dispatch, useEffect, useState } from 'react';
import useValidator from './useValidator';

export const useValidatedChangeHandler = <T>(
  fieldName: string,
  onChange: (value: T) => void,
  defaultValue: T
): [Dispatch<T>, T, string | null] => {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const validator = useValidator(fieldName);

  const handleChange = (newValue: T) => {
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
