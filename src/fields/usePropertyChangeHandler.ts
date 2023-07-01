import { useChangeHandler } from './useChangeHandler';

export const usePropertyChangeHandler = <T, TProperty>(
  fieldName: string,
  onChange: (value: T) => void,
  defaultValue: T
): [
  (
    newPropertyValue: TProperty,
    constructNewValue: (newPropertyValue: TProperty) => T
  ) => void,
  T
] => {
  const [handleChange, value] = useChangeHandler(
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

  return [handlePropertyChange, value];
};
