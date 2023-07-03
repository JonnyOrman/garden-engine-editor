import { createContext } from 'react';
import Triangle from './Triangle';
import Submitter from '../Submitter';
import { jsonTriangleWriter } from './jsonTriangleWriter';
import Creator from '../Creator';

export const TriangleSubmitterContext = createContext<Submitter<Triangle>>(
  new Creator<Triangle>(jsonTriangleWriter)
);
