import Parser from "../Parser";
import Reader from "../Reader";
import Game from "./Game";

export default class GameReader implements Reader<Game> {
    constructor(
        private gameDataReader: Reader<string>,
        private parser: Parser) { }

    async read(): Promise<Game> {
        const gameData = await this.gameDataReader.read();

        const game = this.parser.parse<Game>(gameData);

        return game
    }
}