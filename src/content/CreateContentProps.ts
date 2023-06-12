import Writer from '../Writer';
import Props from '../fields/EditorProps';
import NameProps from '../fields/name/NameProps';
import RgbProps from '../fields/rgb/RgbProps';
import TwoDPointProps from '../fields/twoDPoint/TwoDPointProps';

export default interface CreateContentProps<TContent>
  extends NameProps,
    RgbProps,
    TwoDPointProps {
  contentWriter: Writer<TContent>;
  onHide: () => void;
  sceneDimensionProps: Props<number>;
}
