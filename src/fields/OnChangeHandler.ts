export default interface OnChangeHandler<T> {
  handle(newValue: T, onChange: (value: T) => void): void;
}
