import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateNewGame() {
    const [name, setName] = useState("");
    const [sceneWidth, setSceneWidth] = useState(0);
    const [sceneHeight, setSceneHeight] = useState(0);

    const navigate = useNavigate();
    const goToCreateNewGame = () => {
        navigate("/create-new-game");
    }

    const submit = async (e: any) => {
        e.preventDefault();
        const content = {
            name: name,
            scene: {
                width: sceneWidth,
                height: sceneHeight
            },
            content: {
                objects: [
                    {
                        name: "Rectangle1",
                        type: "rectangle",
                        width: 2.0,
                        height: 5.0,
                        rgb: {
                            r: 0.0,
                            g: 0.0,
                            b: 1.0
                        }
                    },
                    {
                        name: "Rectangle2",
                        type: "rectangle",
                        width: 3.0,
                        height: 2.0,
                        rgb: {
                            r: 1.0,
                            g: 0.0,
                            b: 0.0
                        }
                    }
                ]
            },
            objects: [
                {
                    name: "Rectangle1-a",
                    contentName: "Rectangle1",
                    type: "rectangle",
                    scale: 1.0,
                    width: 2.5,
                    height: 5.0,
                    position: {
                        x: -5.0,
                        y: 5.0
                    },
                    rgb: {
                        r: 0.0,
                        g: 0.0,
                        b: 1.0
                    }
                },
                {
                    name: "Rectangle2-a",
                    contentName: "Rectangle2",
                    type: "rectangle",
                    scale: 1.0,
                    width: 3.0,
                    height: 2.0,
                    position: {
                        x: 5.0,
                        y: -5.0
                    },
                    rgb: {
                        r: 1.0,
                        g: 0.0,
                        b: 0.0
                    }
                }
            ]
        };

        const contentJson = JSON.stringify(content);

        await writeTextFile('PATH_HERE/content.json', contentJson, { dir: BaseDirectory.AppConfig }).then(() => {
            navigate('/edit-game');
        });
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
