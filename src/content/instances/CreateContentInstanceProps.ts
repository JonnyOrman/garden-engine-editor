import Writer from '../../Writer';
import NameProps from '../../fields/name/NameProps';
import ScaleProps from '../../fields/scale/ScaleProps';
import TwoDPointProps from '../../fields/twoDPoint/TwoDPointProps';

export default interface CreateContentInstanceProps<TContent, TContentInstance>
  extends NameProps,
    ScaleProps,
    TwoDPointProps {
  content: TContent;
  contentInstanceWriter: Writer<TContentInstance>;
}
