import GameContentInstancesProvider from '../../../game/GameContentInstancesProvider';
import { gameReader } from '../../../game/GameReader';
import RectangleInstance from './RectangleInstance';

export const rectangleInstanceProvder =
  new GameContentInstancesProvider<RectangleInstance>(gameReader);
