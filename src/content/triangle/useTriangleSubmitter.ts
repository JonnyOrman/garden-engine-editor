import { useContext } from 'react';
import { TriangleSubmitterContext } from './TriangleSubmitterContext';

export const useTriangleSubmitter = () => useContext(TriangleSubmitterContext);
