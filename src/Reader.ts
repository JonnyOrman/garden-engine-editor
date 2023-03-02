import Game from "./Game";

export default interface GameReader {
    read(): Promise<Game>
}