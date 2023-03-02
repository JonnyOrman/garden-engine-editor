import { BaseDirectory, readTextFile, writeTextFile } from "@tauri-apps/api/fs";
import Writer from "./Writer";

export default class JsonObjectWriter<T> implements Writer<T> {
    async write(obj: T): Promise<void> {
        const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

        const content = JSON.parse(contentJson);

        content.content.objects.push(obj);

        await writeTextFile('PATH_HERE/content.json', JSON.stringify(content), { dir: BaseDirectory.AppConfig });
    }
}