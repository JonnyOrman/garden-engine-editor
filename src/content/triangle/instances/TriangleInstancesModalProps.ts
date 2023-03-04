import Writer from "../../../Writer";
import ContentInstancesProvider from "../../instances/ContentInstancesProvider";
import TriangleInstance from "./TriangleInstance";

export default interface TriangleInstancesModalProps {
    contentName: string;
    show: boolean;
    onHide: () => void;
    triangleInstanceWriter: Writer<TriangleInstance>;
    triangleInstancesProvider: ContentInstancesProvider<TriangleInstance>;
}