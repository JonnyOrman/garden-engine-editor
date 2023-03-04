import Writer from "../../../Writer";
import ContentInstancesProvider from "../../instances/ContentInstancesProvider";
import RectangleInstance from "./RectangleInstance";

export default interface RectangleInstancesModalProps {
    contentName: string;
    show: boolean;
    onHide: () => void;
    rectangleInstanceWriter: Writer<RectangleInstance>;
    rectangleInstancesProvider: ContentInstancesProvider<RectangleInstance>;
}