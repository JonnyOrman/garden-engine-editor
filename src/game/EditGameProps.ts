import Props from '../fields/EditorProps';
import NameProps from '../fields/name/NameProps';
import RgbProps from '../fields/rgb/RgbProps';
import ScaleProps from '../fields/scale/ScaleProps';
import TwoDPointProps from '../fields/twoDPoint/TwoDPointProps';
import GameReadWriteProps from './GameReadWriteProps';

export default interface EditGameProps
  extends NameProps,
    GameReadWriteProps,
    ScaleProps,
    RgbProps,
    TwoDPointProps {
  sceneDimensionProps: Props<number>;
}
