import Content from '../content/Content';
import ObjectInstance from '../content/instances/ContentInstance';
import Entity from '../Entity';
import Scene from '../scene/Scene';

export default interface Game extends Entity {
  scene: Scene;
  content: Content;
  objects: ObjectInstance[];
}
