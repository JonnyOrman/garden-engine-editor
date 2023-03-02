import ContentObject from "./ContentObject";
import Rgb from "./Rgb";

export default interface Rectangle extends ContentObject {
    width: number,
    height: number,
    rgb: Rgb
}