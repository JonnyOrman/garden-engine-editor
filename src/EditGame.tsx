import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";
import EditContent from "./EditContent";
import EditScene from "./EditScene";

function EditGame() {
    const [content, setContent] = useState<any>();

    useEffect(() => {
        async function getContent() {
            const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

            const content = JSON.parse(contentJson);

            setContent(content);
        };

        if (!content) {
            getContent();
        }
    }, []);

    return (
        <div>
            <EditScene objects={content?.objects || []} />
            <EditContent content={content?.content || {}} />
        </div>
    )
}

export default EditGame;