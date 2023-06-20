import GameReadWriteProps from '../game/GameReadWriteProps';
import ContentObject from './ContentObject';

export default interface ObjectListItemProps extends GameReadWriteProps {
  object: ContentObject;
}
