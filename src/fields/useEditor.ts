import { Dispatch, SetStateAction, useState } from 'react';

export const useEditor = <T>(
  defaultValue: T
): [
  T,
  Dispatch<SetStateAction<T>>,
  string | null,
  Dispatch<SetStateAction<string | null>>
] => {
  const [value, setValue] = useState<T>(defaultValue);
  const [error, setError] = useState<string | null>(null);

  return [value, setValue, error, setError];
};
