import { gameReader } from '../../game/GameReader';
import { gameWriter } from '../../game/GameWriter';
import JsonObjectWriter from '../JsonObjectWriter';
import Rectangle from './Rectangle';

export const jsonRectangleWriter = new JsonObjectWriter<Rectangle>(
  gameReader,
  gameWriter
);
