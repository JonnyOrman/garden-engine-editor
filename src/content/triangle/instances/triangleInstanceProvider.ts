import GameContentInstancesProvider from '../../../game/GameContentInstancesProvider';
import { gameReader } from '../../../game/GameReader';
import { TriangleInstance } from './TriangleInstance';

export const triangleInstanceProvider =
  new GameContentInstancesProvider<TriangleInstance>(gameReader);
