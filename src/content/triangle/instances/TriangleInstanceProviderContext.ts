import { createContext } from 'react';
import { TriangleInstance } from './TriangleInstance';
import ContentInstancesProvider from '../../instances/ContentInstancesProvider';
import { triangleInstanceProvider } from './triangleInstanceProvider';

export const TriangleInstanceProviderContext = createContext<
  ContentInstancesProvider<TriangleInstance>
>(triangleInstanceProvider);
