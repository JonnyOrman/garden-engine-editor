import { Dispatch, useEffect, useState } from 'react';

export const useChangeHandler = <T>(
  fieldName: string,
  onChange: (value: T) => void,
  defaultValue: T
): [Dispatch<T>, T] => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (newValue: T) => {
    setValue(newValue);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return [handleChange, value];
};
