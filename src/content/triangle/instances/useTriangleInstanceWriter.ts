import { useContext } from 'react';
import { TriangleInstanceWriterContext } from './TriangleInstanceWriterContext';

export const useTriangleInstanceWriter = () =>
  useContext(TriangleInstanceWriterContext);
