import { gameReader } from '../../../game/GameReader';
import { gameWriter } from '../../../game/GameWriter';
import JsonContentInstanceWriter from '../../instances/JsonContentInstanceWriter';
import RectangleInstance from './RectangleInstance';

export const jsonRectangleInstanceWriter =
  new JsonContentInstanceWriter<RectangleInstance>(gameReader, gameWriter);
