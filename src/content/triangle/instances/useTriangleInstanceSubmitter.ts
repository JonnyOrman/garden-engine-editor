import { useContext } from 'react';
import { TriangleInstanceSubmitterContext } from './TriangleInstanceSubmitterContext';

export const useTriangleInstanceSubmitter = () =>
  useContext(TriangleInstanceSubmitterContext);
