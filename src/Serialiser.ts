export default interface Serialiser {
  serialise<T>(obj: T): string;
}
