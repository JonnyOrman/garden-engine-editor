import Writer from "../../../Writer";
import Rectangle from "../Rectangle";
import RectangleInstance from "./RectangleInstance";

export default interface CreateRectangleInstanceProps {
    rectangle: Rectangle;
    rectangleInstanceWriter: Writer<RectangleInstance>;
}