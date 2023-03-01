import { BaseDirectory, readTextFile } from "@tauri-apps/api/fs";
import { useEffect, useState } from "react";

function EditScene() {
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        async function getObjects() {
            const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

            const content = JSON.parse(contentJson);

            setObjects(content.objects);
        };

        if (objects.length == 0) {
            getObjects();
        }
    }, []);

    return (
        <div>
            {
                objects.map((object: any) => {
                    return <div>{object.name}, {object.type}</div>
                })
            }
        </div>
    )
}

export default EditScene;