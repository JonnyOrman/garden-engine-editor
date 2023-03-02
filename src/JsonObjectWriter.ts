import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";
import ContentObject from "./ContentObject";
import GameReader from "./Reader";
import Writer from "./Writer";

export default class JsonObjectWriter<T extends ContentObject> implements Writer<T> {
    constructor(private gameReader: GameReader) { }

    async write(obj: T): Promise<void> {
        const game = await this.gameReader.read();

        game.content.objects.push(obj);

        await writeTextFile('PATH_HERE/content.json', JSON.stringify(game), { dir: BaseDirectory.AppConfig });
    }
}