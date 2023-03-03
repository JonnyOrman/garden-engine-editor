import Game from "./Game";
import Writer from "../Writer";

export default class JsonGameWriter implements Writer<Game>{
    constructor(private gameJsonWriter: Writer<string>) { }

    async write(game: Game): Promise<void> {
        const gameJson = JSON.stringify(game);

        await this.gameJsonWriter.write(gameJson);
    }
}