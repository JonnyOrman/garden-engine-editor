import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";
import Provider from "../Provider";
import Writer from "../Writer";

export default class GameJsonWriter implements Writer<string> {
    constructor(private gameFilePathProvider: Provider<string>) { }

    async write(gameJson: string): Promise<void> {
        await writeTextFile(this.gameFilePathProvider.get(), gameJson, { dir: BaseDirectory.AppConfig })
    }
}