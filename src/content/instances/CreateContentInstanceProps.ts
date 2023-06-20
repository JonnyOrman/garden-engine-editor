import Writer from '../../Writer';

export default interface CreateContentInstanceProps<
  TContent,
  TContentInstance
> {
  content: TContent;
  contentInstanceWriter: Writer<TContentInstance>;
}
