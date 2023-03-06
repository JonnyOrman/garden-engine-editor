import Game from "./Game";
import Writer from "../Writer";
import Serialiser from "../Serialiser";

export default class GameWriter implements Writer<Game>{
    constructor(
        private serialiser: Serialiser,
        private gameDataWriter: Writer<string>) { }

    async write(game: Game): Promise<void> {
        const gameData = this.serialiser.serialise(game);

        await this.gameDataWriter.write(gameData);
    }
}