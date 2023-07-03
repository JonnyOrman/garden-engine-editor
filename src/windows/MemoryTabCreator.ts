import Store from '../Store';
import TabCreator from './TabCreator';
import TabProps from './TabProps';

export default class MemoryTabCreator implements TabCreator {
  constructor(private store: Store<TabProps>) {}

  create(name: string): void {
    console.log('creating tab ' + name);
    const tab = {
      name: name,
      url: '',
    };

    this.store.add(tab);
  }
}
