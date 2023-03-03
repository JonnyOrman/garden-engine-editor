import ContentInstancesProvider from "./ContentInstancesProvider";

export default interface ContentInstancesModal {
    show: boolean;
    onHide: () => void;
    contentName: string;
    contentInstancesProvider: ContentInstancesProvider;
}