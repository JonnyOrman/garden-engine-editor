import Entity from '../../Entity';
import Writer from '../../Writer';
import ContentInstance from './ContentInstance';
import ContentInstancesProvider from './ContentInstancesProvider';

export default interface ContentInstancesModalProps<
  TContent extends Entity,
  TContentInstance
> {
  content: TContent;
  show: boolean;
  onHide: () => void;
  contentInstanceWriter: Writer<ContentInstance>;
  contentInstancesProvider: ContentInstancesProvider<TContentInstance>;
  createContentInstance: JSX.Element;
}
