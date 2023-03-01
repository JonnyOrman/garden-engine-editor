function CreateNewGame() {

    return (
        <div>
            <h1>Create new game</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
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
