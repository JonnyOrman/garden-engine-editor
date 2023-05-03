import Writer from '../Writer';
import NameProps from '../fields/NameProps';
import Props from '../fields/Props';
import RgbProps from '../fields/RgbProps';
import TwoDPointProps from '../fields/TwoDPointProps';

export default interface CreateContentProps<TContent>
  extends NameProps,
    RgbProps,
    TwoDPointProps {
  contentWriter: Writer<TContent>;
  onHide: () => void;
  sceneDimensionProps: Props<number>;
}
