import Writer from "../../Writer";
import Rectangle from "../rectangle/Rectangle";

export default interface CreateRectangleProps {
    rectangleWriter: Writer<Rectangle>;
    onHide: () => void;
}