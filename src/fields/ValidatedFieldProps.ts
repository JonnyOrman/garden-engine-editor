import Props from './Props';

export default interface ValidatedFieldProps<T> {
  onChange: (value: T) => void;
  props: Props<T>;
}
