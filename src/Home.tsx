import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const goToCreateNewGame = () => {
        navigate("/create-new-game");
    }

    return (
        <div>
            <h1>Garden Engine Editor</h1>

            <div className="row">
                <button onClick={goToCreateNewGame}>Create new game</button>
            </div>
        </div >
    );
}

export default Home;
