import { createContext } from 'react';
import Writer from '../../../Writer';
import EquilateralTriangle from './EquilateralTriangle';
import { jsonTriangleWriter } from './jsonEquilateralTriangleWriter';

export const EquilateralTriangleWriterContext =
  createContext<Writer<EquilateralTriangle>>(jsonTriangleWriter);
