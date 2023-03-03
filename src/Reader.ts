import Game from "./game/Game";

export default interface GameReader {
    read(): Promise<Game>
}