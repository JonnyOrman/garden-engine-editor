import { readTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { useEffect, useState } from 'react';

function EditContent() {
    const [name, setName] = useState('');
    const [objects, setObjects] = useState([]);

    useEffect(() => {
        async function getData() {
            const contentJson: any = await readTextFile('PATH_HERE/content.json', { dir: BaseDirectory.AppConfig });

            const content = JSON.parse(contentJson);

            setName(content.name);
            setObjects(content.content.objects);
        };

        if (!name || !objects) {
            getData();
        }
    }, []);

    return (
        <div>
            {
                objects.map((object: any) => {
                    return <div>{object.name}</div>
                })
            }
        </div>
    )
}

export default EditContent;