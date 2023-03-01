import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

function CreateNewGame() {

    return (
        <div>
            <h1>Create new game</h1>
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    const content = {
                        name: "GAME NAME HERE",
                        scene: {
                            width: 10.0,
                            height: 10.0
                        },
                    };

                    const contentJson = JSON.stringify(content);

                    await writeTextFile('PATH_HERE/content.json', contentJson, { dir: BaseDirectory.AppConfig });
                }}
            >
                <div>
                    <label>
                        Name:
                        <input
                            id="name"
                            type="text"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Scene width:
                        <input
                            id="scene-width"
                            type="number"
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Scene height:
                        <input
                            id="scene-height"
                            type="number"
                        />
                    </label>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateNewGame;
