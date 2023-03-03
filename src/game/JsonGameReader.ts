import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import GameReader from "../Reader";
import Game from "./Game";

export default class JsonGameReader implements GameReader {
    async read(): Promise<Game> {
        const gameJson = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

        const game = JSON.parse(gameJson);

        return game
    }
}