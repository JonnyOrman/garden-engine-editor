import Game from "../game/Game";
import Reader from "../Reader";
import Writer from "../Writer";
import ContentObject from "./ContentObject";

export default interface ObjectListItemProps {
    object: ContentObject;
    gameReader: Reader<Game>;
    gameWriter: Writer<Game>;
}