import React from 'react';
import { Input } from './Input';

export const NumberEditor = ({
  onChange,
}: {
  onChange: (newValue: number) => void;
}) => {
  return (
    <Input
      type="number"
      onChange={onChange}
      castValue={(value: string) => +value}
    />
  );
};

export default NumberEditor;
