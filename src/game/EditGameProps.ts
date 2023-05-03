import NameProps from '../fields/NameProps';
import Props from '../fields/Props';
import RgbProps from '../fields/RgbProps';
import ScaleProps from '../fields/ScaleProps';
import TwoDPointProps from '../fields/TwoDPointProps';
import GameReadWriteProps from './GameReadWriteProps';

export default interface EditGameProps
  extends NameProps,
    GameReadWriteProps,
    ScaleProps,
    RgbProps,
    TwoDPointProps {
  sceneDimensionProps: Props<number>;
}
