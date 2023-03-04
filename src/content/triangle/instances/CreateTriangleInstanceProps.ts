import Writer from "../../../Writer";
import Triangle from "../Triangle";
import TriangleInstance from "./TriangleInstance";

export default interface CreateTriangleInstanceProps {
    triangle: Triangle;
    triangleInstanceWriter: Writer<TriangleInstance>;
}