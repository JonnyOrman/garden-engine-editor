import Writer from "../../Writer";
import Triangle from "./Triangle";

export default interface CreateTriangleProps {
    triangleWriter: Writer<Triangle>;
    onHide: () => void;
}