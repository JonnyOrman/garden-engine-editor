import Reader from "../Reader";
import Game from "./Game";

export default class JsonGameReader implements Reader<Game> {
    constructor(private gameJsonReader: Reader<string>) { }

    async read(): Promise<Game> {
        const gameJson = await this.gameJsonReader.read();

        const game = JSON.parse(gameJson);

        return game
    }
}