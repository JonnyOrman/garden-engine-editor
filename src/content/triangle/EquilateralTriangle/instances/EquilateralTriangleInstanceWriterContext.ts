import { createContext } from 'react';
import Writer from '../../../../Writer';
import { EquilateralTriangleInstance } from './EquilateralTriangleInstance';
import { jsonEquilateralTriangleInstanceWriter } from './jsonEquilateralTriangleInstanceWriter';

export const EquilateralTriangleInstanceWriterContext = createContext<
  Writer<EquilateralTriangleInstance>
>(jsonEquilateralTriangleInstanceWriter);
