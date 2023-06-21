import { createContext } from 'react';
import { EquilateralTriangleInstance } from './EquilateralTriangleInstance';
import ContentInstancesProvider from '../../../instances/ContentInstancesProvider';
import { equilateralTriangleInstanceProvider } from './equilateralTriangleInstanceProvider';

export const EquilateralTriangleInstanceProviderContext = createContext<
  ContentInstancesProvider<EquilateralTriangleInstance>
>(equilateralTriangleInstanceProvider);
