import { useContext } from 'react';
import TabCreatorContext from './TabCreatorContext';

export const useTabCreator = () => useContext(TabCreatorContext);

export default useTabCreator;
