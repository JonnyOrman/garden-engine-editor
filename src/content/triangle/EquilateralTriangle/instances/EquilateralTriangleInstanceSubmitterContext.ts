import { createContext } from 'react';
import Submitter from '../../../Submitter';
import { EquilateralTriangleInstance } from './EquilateralTriangleInstance';
import { jsonEquilateralTriangleInstanceWriter } from './jsonEquilateralTriangleInstanceWriter';
import Creator from '../../../Creator';

export const EquilateralTriangleInstanceSubmitterContext = createContext<
  Submitter<EquilateralTriangleInstance>
>(
  new Creator<EquilateralTriangleInstance>(
    jsonEquilateralTriangleInstanceWriter
  )
);
