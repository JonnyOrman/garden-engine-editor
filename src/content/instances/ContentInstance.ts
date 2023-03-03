import Entity from "../../Entity";
import Position from "../../Position";

export default interface ContentInstance extends Entity {
    contentName: string,
    scale: number,
    position: Position
}