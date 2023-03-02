import Entity from "./Entity";
import Position from "./Position";

export default interface ContentInstance extends Entity {
    scale: number,
    position: Position
}