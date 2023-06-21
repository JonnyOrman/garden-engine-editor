import { gameReader } from '../../../../game/GameReader';
import { gameWriter } from '../../../../game/GameWriter';
import JsonContentInstanceWriter from '../../../instances/JsonContentInstanceWriter';
import { EquilateralTriangleInstance } from './EquilateralTriangleInstance';

export const jsonEquilateralTriangleInstanceWriter =
  new JsonContentInstanceWriter<EquilateralTriangleInstance>(gameReader, gameWriter);
