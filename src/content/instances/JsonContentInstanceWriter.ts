import Game from "../../game/Game";
import Reader from "../../Reader";
import Writer from "../../Writer";
import ContentInstance from "./ContentInstance";

export default class JsonContentInstanceWriter<TContentInstance extends ContentInstance> implements Writer<TContentInstance>{
    constructor(
        private gameReader: Reader<Game>,
        private gameWriter: Writer<Game>,
    ) { }

    async write(contentInstance: TContentInstance): Promise<void> {
        const game = await this.gameReader.read();

        game.objects.push(contentInstance);

        await this.gameWriter.write(game);
    }
}