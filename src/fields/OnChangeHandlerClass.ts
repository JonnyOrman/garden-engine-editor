export default interface OnChangeHandlerClass<T> {
  handle(newValue: T, onChange: (value: T) => void): void;
}
