import { gameReader } from '../../../game/GameReader';
import { gameWriter } from '../../../game/GameWriter';
import JsonObjectWriter from '../../JsonObjectWriter';
import EquilateralTriangle from './EquilateralTriangle';

export const jsonEquilateralTriangleWriter =
  new JsonObjectWriter<EquilateralTriangle>(gameReader, gameWriter);
