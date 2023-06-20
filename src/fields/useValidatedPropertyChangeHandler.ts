import { useValidatedChangeHandler } from './useValidatedChangeHandler';

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
  const [handleChange, value, error] = useValidatedChangeHandler(
    fieldName,
    onChange,
    defaultValue
  );

  const handlePropertyChange = (
    newPropertyValue: TProperty,
    constructNewValue: (newPropertyValue: TProperty) => T
  ) => {
    const newValue = constructNewValue(newPropertyValue);

    handleChange(newValue);
  };

  return [handlePropertyChange, value, error];
};
