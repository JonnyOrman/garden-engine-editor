import NameProps from '../fields/NameProps';
import Props from '../fields/Props';
import RgbProps from '../fields/RgbProps';
import TwoDPointProps from '../fields/TwoDPointProps';
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
