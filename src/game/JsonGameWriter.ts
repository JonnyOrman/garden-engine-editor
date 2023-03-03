import { BaseDirectory, writeTextFile } from "@tauri-apps/api/fs";
import Game from "./Game";
import Writer from "../Writer";

export default class JsonGameWriter implements Writer<Game>{
    async write(game: Game): Promise<void> {
        const gameJson = JSON.stringify(game);

        await writeTextFile('PATH_HERE/content.json', gameJson, { dir: BaseDirectory.AppConfig })
    }
}