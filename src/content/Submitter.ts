export default interface Submitter<T> {
  submit(content: T, e: any, onSubmit: () => void): Promise<void>;
}
