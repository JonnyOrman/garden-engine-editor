import Game from "../game/Game";
import Reader from "../Reader";
import ContentObject from "./ContentObject";

export default interface ObjectListItemProps {
    object: ContentObject;
    gameReader: Reader<Game>;
}