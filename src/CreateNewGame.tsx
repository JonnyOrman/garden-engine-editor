import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { useState } from 'react';

function CreateNewGame() {
    const [name, setName] = useState("");
    const [sceneWidth, setSceneWidth] = useState(0);
    const [sceneHeight, setSceneHeight] = useState(0);

    const submit = async (e: any) => {
        e.preventDefault();
        const content = {
            name: name,
            scene: {
                width: sceneWidth,
                height: sceneHeight
            },
        };

        const contentJson = JSON.stringify(content);

        await writeTextFile('PATH_HERE/content.json', contentJson, { dir: BaseDirectory.AppConfig });
    };

    return (
        <div>
            <h1>Create new game</h1>
            <form
                onSubmit={submit}
            >
                <div>
                    <label>
                        Name:
                        <input
                            id="name"
                            type="text"
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Scene width:
                        <input
                            id="scene-width"
                            type="number"
                            onChange={(e) => setSceneWidth(+e.currentTarget.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Scene height:
                        <input
                            id="scene-height"
                            type="number"
                            onChange={(e) => setSceneHeight(+e.currentTarget.value)}
                        />
                    </label>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateNewGame;
