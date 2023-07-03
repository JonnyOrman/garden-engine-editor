import AllProvider from './AllProvider';
import Store from './Store';

export default class MemoryAllProvider<T> implements AllProvider<T> {
  constructor(private store: Store<T>) {}

  getAll(): T[] {
    return this.store.getAll();
  }
}
