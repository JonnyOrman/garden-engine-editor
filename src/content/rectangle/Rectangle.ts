import Rgb from '../../fields/Rgb';
import ContentObject from '../ContentObject';

export default interface Rectangle extends ContentObject {
  width: number;
  height: number;
  rgb: Rgb;
}
