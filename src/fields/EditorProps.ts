export default interface EditorProps<T> {
  onChange: (newValue: T) => void;
}
