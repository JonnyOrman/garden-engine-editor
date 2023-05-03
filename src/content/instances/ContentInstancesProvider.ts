export default interface ContentInstancesProvider<TContentInstance> {
  get(contentName: string): Promise<TContentInstance[]>;
}
