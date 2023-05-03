import Writer from '../../Writer';
import NameProps from '../../fields/NameProps';
import ScaleProps from '../../fields/ScaleProps';
import TwoDPointProps from '../../fields/TwoDPointProps';

export default interface CreateContentInstanceProps<TContent, TContentInstance>
  extends NameProps,
    ScaleProps,
    TwoDPointProps {
  content: TContent;
  contentInstanceWriter: Writer<TContentInstance>;
}
