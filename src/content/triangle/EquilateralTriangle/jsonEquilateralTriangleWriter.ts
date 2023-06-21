import { gameReader } from '../../../game/GameReader';
import { gameWriter } from '../../../game/GameWriter';
import JsonObjectWriter from '../../JsonObjectWriter';
import EquilateralTriangle from './EquilateralTriangle';

export const jsonTriangleWriter = new JsonObjectWriter<EquilateralTriangle>(
  gameReader,
  gameWriter
);
