import Writer from "../../Writer";
import Creator from "../Creator";
import Rectangle from "./Rectangle";

export default class RectangleCreator extends Creator<Rectangle> {
    constructor(writer: Writer<Rectangle>) {
        super(writer);
    }
}