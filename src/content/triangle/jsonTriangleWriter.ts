import { gameReader } from '../../game/GameReader';
import { gameWriter } from '../../game/GameWriter';
import JsonObjectWriter from '../JsonObjectWriter';
import Triangle from './Triangle';

export const jsonTriangleWriter = new JsonObjectWriter<Triangle>(
  gameReader,
  gameWriter
);
