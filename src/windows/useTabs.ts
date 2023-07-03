import useTabsProvider from './useTabsProvider';

export const useTabs = () => {
  const tabsProvider = useTabsProvider();

  const tabs = tabsProvider.getAll();

  return tabs;
};

export default useTabs;
