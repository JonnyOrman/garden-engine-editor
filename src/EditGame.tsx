import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import EditContent from "./EditContent";
import EditScene from "./EditScene";

function EditGame() {
    const [name, setName] = useState('');

    useEffect(() => {
        async function getName() {
            const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

            const content = JSON.parse(contentJson);

            setName(content.name);
        };

        if (!name) {
            getName();
        }
    }, []);

    return (
        <div>
            <EditScene />
            <EditContent />
        </div>
    )
}

export default EditGame;