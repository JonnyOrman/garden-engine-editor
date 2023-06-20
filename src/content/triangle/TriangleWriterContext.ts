import { createContext } from 'react';
import Writer from '../../Writer';
import Triangle from './Triangle';
import { jsonTriangleWriter } from './jsonTriangleWriter';

export const TriangleWriterContext =
  createContext<Writer<Triangle>>(jsonTriangleWriter);
