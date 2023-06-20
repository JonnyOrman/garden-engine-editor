import { createContext } from 'react';
import Writer from '../../../Writer';
import { TriangleInstance } from './TriangleInstance';
import { jsonTriangleInstanceWriter } from './jsonTriangleInstanceWriter';

export const TriangleInstanceWriterContext = createContext<
  Writer<TriangleInstance>
>(jsonTriangleInstanceWriter);
