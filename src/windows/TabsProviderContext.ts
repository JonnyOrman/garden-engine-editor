import { createContext } from 'react';
import TabProps from './TabProps';
import MemoryAllProvider from '../MemoryAllProvider';
import AllProvider from '../AllProvider';
import tabsStore from './tabsStore';

export const TabsProviderContext = createContext<AllProvider<TabProps>>(
  new MemoryAllProvider<TabProps>(tabsStore)
);

export default TabsProviderContext;
