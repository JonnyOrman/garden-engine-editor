import ContentObject from "./ContentObject";
import Game from "../game/Game";
import Writer from "../Writer";
import Reader from "../Reader";

export default class JsonObjectWriter<T extends ContentObject> implements Writer<T> {
    constructor(
        private gameReader: Reader<Game>,
        private gameWriter: Writer<Game>) { }

    async write(obj: T): Promise<void> {
        const game = await this.gameReader.read();

        game.content.objects.push(obj);

        await this.gameWriter.write(game);
    }
}