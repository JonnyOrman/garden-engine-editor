import { createContext } from 'react';
import Writer from '../../../Writer';
import RectangleInstance from './RectangleInstance';
import { jsonRectangleInstanceWriter } from './jsonRectangleInstanceWriter';

export const RectangleInstanceWriterContext = createContext<
  Writer<RectangleInstance>
>(jsonRectangleInstanceWriter);
