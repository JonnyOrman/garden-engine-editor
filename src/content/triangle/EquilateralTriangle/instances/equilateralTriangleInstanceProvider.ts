import GameContentInstancesProvider from '../../../../game/GameContentInstancesProvider';
import { gameReader } from '../../../../game/GameReader';
import { EquilateralTriangleInstance } from './EquilateralTriangleInstance';

export const equilateralTriangleInstanceProvider =
  new GameContentInstancesProvider<EquilateralTriangleInstance>(gameReader);
