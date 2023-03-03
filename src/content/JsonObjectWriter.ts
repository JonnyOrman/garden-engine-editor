import ContentObject from "./ContentObject";
import Game from "../game/Game";
import GameReader from "../Reader";
import Writer from "../Writer";

export default class JsonObjectWriter<T extends ContentObject> implements Writer<T> {
    constructor(
        private gameReader: GameReader,
        private gameWriter: Writer<Game>) { }

    async write(obj: T): Promise<void> {
        const game = await this.gameReader.read();

        game.content.objects.push(obj);

        await this.gameWriter.write(game);
    }
}