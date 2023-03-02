import Content from "./Content";
import ObjectInstance from "./ContentInstance";
import Entity from "./Entity";
import Scene from "./Scene";

export default interface Game extends Entity {
    scene: Scene,
    content: Content,
    objects: ObjectInstance[]
}