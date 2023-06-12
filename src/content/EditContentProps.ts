import Props from '../fields/EditorProps';
import NameProps from '../fields/name/NameProps';
import RgbProps from '../fields/rgb/RgbProps';
import ScaleProps from '../fields/scale/ScaleProps';
import TwoDPointProps from '../fields/twoDPoint/TwoDPointProps';
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
