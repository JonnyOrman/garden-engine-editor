import OnChangeHandler from './OnChangeHandler';
import Validator from './Validator';

export default interface EditorProps<T> {
  validator: Validator<T>;
  onChangeHandler: OnChangeHandler<T>;
}
