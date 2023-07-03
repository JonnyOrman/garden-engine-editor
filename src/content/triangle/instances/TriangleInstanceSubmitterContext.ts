import { createContext } from 'react';
import { TriangleInstance } from './TriangleInstance';
import Submitter from '../../Submitter';
import { jsonTriangleInstanceWriter } from './jsonTriangleInstanceWriter';
import Creator from '../../Creator';

export const TriangleInstanceSubmitterContext = createContext<
  Submitter<TriangleInstance>
>(new Creator<TriangleInstance>(jsonTriangleInstanceWriter));
