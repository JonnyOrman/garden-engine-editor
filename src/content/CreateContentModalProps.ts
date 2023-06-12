import Props from '../fields/EditorProps';
import NameProps from '../fields/name/NameProps';
import RgbProps from '../fields/rgb/RgbProps';
import TwoDPointProps from '../fields/twoDPoint/TwoDPointProps';
import GameReadWriteProps from '../game/GameReadWriteProps';

export default interface CreateContentModalProps
  extends NameProps,
    GameReadWriteProps,
    RgbProps,
    TwoDPointProps {
  onHide: () => void;
  show: boolean;
  sceneDimensionProps: Props<number>;
}
