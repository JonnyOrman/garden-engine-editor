import Props from './EditorProps';

export default interface ValidatedFieldProps<T> {
  onChange: (value: T) => void;
  props: Props<T>;
}
