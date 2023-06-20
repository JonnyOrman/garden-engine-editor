import { useEffect, useState } from 'react';

export const useChangeHandler = <T>(
  onChange: (value: T) => void,
  defaultValue: T
) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (newValue: T) => {
    console.log('new value: ' + newValue);

    setValue(newValue);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return handleChange;
};
