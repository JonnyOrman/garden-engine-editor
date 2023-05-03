import NameProps from '../fields/NameProps';
import ScaleProps from '../fields/ScaleProps';
import TwoDPointProps from '../fields/TwoDPointProps';
import GameReadWriteProps from '../game/GameReadWriteProps';
import ContentObject from './ContentObject';

export default interface ObjectListItemProps
  extends NameProps,
    GameReadWriteProps,
    ScaleProps,
    TwoDPointProps {
  object: ContentObject;
}
