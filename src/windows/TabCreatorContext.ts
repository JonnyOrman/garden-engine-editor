import { createContext } from 'react';
import TabCreator from './TabCreator';
import MemoryTabCreator from './MemoryTabCreator';
import tabsStore from './tabsStore';

export const TabCreatorContext = createContext<TabCreator>(
  new MemoryTabCreator(tabsStore)
);

export default TabCreatorContext;
