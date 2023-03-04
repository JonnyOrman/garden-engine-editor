import Writer from "../../../Writer";
import ContentInstance from "../../instances/ContentInstance";
import ContentInstancesProvider from "../../instances/ContentInstancesProvider";
import Rectangle from "../Rectangle";
import RectangleInstance from "./RectangleInstance";

export default interface RectangleInstancesModalProps {
    rectangle: Rectangle;
    show: boolean;
    onHide: () => void;
    contentInstanceWriter: Writer<ContentInstance>;
    rectangleInstancesProvider: ContentInstancesProvider<RectangleInstance>;
}