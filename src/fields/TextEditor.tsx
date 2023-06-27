import React from 'react';
import { Input } from './Input';

export const TextEditor = ({
  onChange,
}: {
  onChange: (newValue: string) => void;
}) => {
  return (
    <Input
      type="text"
      onChange={onChange}
      castValue={(value: string) => value}
    />
  );
};

export default TextEditor;
