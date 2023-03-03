import ContentInstance from "./ContentInstance";

export default interface ContentInstancesProvider {
    get(contentName: string): Promise<ContentInstance[]>;
}