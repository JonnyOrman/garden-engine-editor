import { useContext } from 'react';
import { TabsProviderContext } from './TabsProviderContext';

export const useTabsProvider = () => useContext(TabsProviderContext);

export default useTabsProvider;
