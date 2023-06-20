import { createContext } from 'react';
import Writer from '../../Writer';
import Rectangle from './Rectangle';
import { jsonRectangleWriter } from './jsonRectangleWriter';

export const RectangleWriterContext =
  createContext<Writer<Rectangle>>(jsonRectangleWriter);
