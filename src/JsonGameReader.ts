import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import Game from "./Game";
import GameReader from "./Reader";

export default class JsonGameReader implements GameReader {
    async read(): Promise<Game> {
        const gameJson = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

        const game = JSON.parse(gameJson);

        return game
    }
}