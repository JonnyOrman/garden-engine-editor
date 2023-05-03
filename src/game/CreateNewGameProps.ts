import Writer from '../Writer';
import Game from './Game';
import Props from '../fields/Props';

export default interface CreateNewGameProps {
  gameWriter: Writer<Game>;
  nameProps: Props<string>;
  sceneDimensionProps: Props<number>;
}
