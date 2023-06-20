import GameReadWriteProps from '../game/GameReadWriteProps';
import Content from './Content';

export default interface EditContentProps extends GameReadWriteProps {
  content: Content | undefined;
}
