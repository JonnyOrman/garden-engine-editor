import { useContext } from 'react';
import { RectangleInstanceSubmitterContext } from './RectangleInstanceSubmitterContext';

export const useRectangleInstanceSubmitter = () =>
  useContext(RectangleInstanceSubmitterContext);
