export default class Store<T> {
  constructor(private objects: T[]) {}

  getAll = () => {
    return this.objects;
  };

  add = (object: T) => {
    this.objects.push(object);
  };
}
