import Writer from '../Writer';
import Game from './Game';
import Props from '../fields/EditorProps';
import Scene from '../scene/Scene';

export default interface CreateNewGameProps {
  gameWriter: Writer<Game>;
  nameProps: Props<string>;
  sceneDimensionProps: Props<number>;
  sceneProps: Props<Scene>;
}
