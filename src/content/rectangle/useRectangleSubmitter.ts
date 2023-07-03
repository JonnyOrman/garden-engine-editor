import { useContext } from 'react';
import { RectangleSubmitterContext } from './RectangleSubmitterContext';

export const useRectangleSubmitter = () =>
  useContext(RectangleSubmitterContext);
