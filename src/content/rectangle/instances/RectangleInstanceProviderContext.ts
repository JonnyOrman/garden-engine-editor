import { createContext } from 'react';
import RectangleInstance from './RectangleInstance';
import ContentInstancesProvider from '../../instances/ContentInstancesProvider';
import { rectangleInstanceProvder } from './rectangleInstanceProvider';

export const RectangleInstanceProviderContext = createContext<
  ContentInstancesProvider<RectangleInstance>
>(rectangleInstanceProvder);
