import NameProps from '../fields/NameProps';
import Props from '../fields/Props';
import RgbProps from '../fields/RgbProps';
import ScaleProps from '../fields/ScaleProps';
import TwoDPointProps from '../fields/TwoDPointProps';
import GameReadWriteProps from '../game/GameReadWriteProps';
import Content from './Content';

export default interface EditContentProps
  extends NameProps,
    GameReadWriteProps,
    ScaleProps,
    RgbProps,
    TwoDPointProps {
  content: Content | undefined;
  sceneDimensionProps: Props<number>;
}
