import OnChangeHandler from './OnChangeHandler';
import Validator from './Validator';

export default interface Props<T> {
  validator: Validator<T>;
  onChangeHandler: OnChangeHandler<T>;
}
