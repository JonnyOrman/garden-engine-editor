export default interface Writer<T> {
    write(obj: T): Promise<void>;
}