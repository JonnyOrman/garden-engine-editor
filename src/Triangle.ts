import ContentObject from "./ContentObject";
import { TrianglePoint } from "./TrianglePoint";

export default interface Triangle extends ContentObject {
    point1: TrianglePoint,
    point2: TrianglePoint,
    point3: TrianglePoint
}