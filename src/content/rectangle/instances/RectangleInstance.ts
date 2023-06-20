import Rgb from '../../../fields/rgb/Rgb';
import ContentInstance from '../../instances/ContentInstance';

export default interface RectangleInstance extends ContentInstance {
  rgb: Rgb;
}
