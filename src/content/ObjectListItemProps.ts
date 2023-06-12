import NameProps from '../fields/name/NameProps';
import ScaleProps from '../fields/scale/ScaleProps';
import TwoDPointProps from '../fields/twoDPoint/TwoDPointProps';
import GameReadWriteProps from '../game/GameReadWriteProps';
import ContentObject from './ContentObject';

export default interface ObjectListItemProps
  extends NameProps,
    GameReadWriteProps,
    ScaleProps,
    TwoDPointProps {
  object: ContentObject;
}
