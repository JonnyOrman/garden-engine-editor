import React from 'react';

export const Input = <T,>({
  type,
  onChange,
  castValue,
}: {
  type: string;
  onChange: (newValue: T) => void;
  castValue: (value: string) => T;
}) => {
  return (
    <input
      type={type}
      onChange={(e) => onChange(castValue(e.currentTarget.value))}
    ></input>
  );
};
