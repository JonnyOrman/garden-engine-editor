import { gameReader } from '../../../game/GameReader';
import { gameWriter } from '../../../game/GameWriter';
import JsonContentInstanceWriter from '../../instances/JsonContentInstanceWriter';
import { TriangleInstance } from './TriangleInstance';

export const jsonTriangleInstanceWriter =
  new JsonContentInstanceWriter<TriangleInstance>(gameReader, gameWriter);
