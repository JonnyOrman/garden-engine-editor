import Writer from "../../../Writer";
import ContentInstance from "../../instances/ContentInstance";
import ContentInstancesProvider from "../../instances/ContentInstancesProvider";
import Triangle from "../Triangle";
import TriangleInstance from "./TriangleInstance";

export default interface TriangleInstancesModalProps {
    triangle: Triangle;
    show: boolean;
    onHide: () => void;
    contentInstanceWriter: Writer<ContentInstance>;
    triangleInstancesProvider: ContentInstancesProvider<TriangleInstance>;
}