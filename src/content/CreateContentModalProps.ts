import Game from "../game/Game";
import Reader from "../Reader";
import Writer from "../Writer";

export default interface CreateContentModalProps {
    gameReader: Reader<Game>;
    gameWriter: Writer<Game>;
    onHide: () => void;
    show: boolean;
}