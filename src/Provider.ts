export default interface Provider<T> {
    get(): T;
}