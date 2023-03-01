import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { useEffect, useState } from 'react';

function EditContent() {
    const [content, setContent] = useState<any>();

    useEffect(() => {
        async function getContent() {
            const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

            const content = JSON.parse(contentJson);

            setContent(content.content);
        };

        if (!content) {
            getContent();
        }
    }, []);

    return (
        <div>
            {
                content?.objects?.map((object: any) => {
                    return <div>{object.name}</div>
                })
            }
        </div >
    )
}

export default EditContent;