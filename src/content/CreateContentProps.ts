import Writer from '../Writer';

export default interface CreateContentProps<TContent> {
  contentWriter: Writer<TContent>;
  onHide: () => void;
}
