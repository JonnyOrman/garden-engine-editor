export default interface Reader<T> {
    read(): Promise<T>
}