import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EditContent from "../content/EditContent";
import EditScene from "../scene/EditScene";
import Game from "./Game";

function EditGame(props: any) {
    const [game, setGame] = useState<Game>();

    useEffect(() => {
        async function getGame() {
            const game = await props.gameReader.read();

            setGame(game);
        };

        if (!game) {
            getGame();
        }
    }, []);

    return (
        <Row className="h-100">
            <Col xs="10">
                <EditScene objects={game?.objects || []} />
            </Col>
            <Col xs="2">
                <EditContent content={game?.content || {}} gameWriter={props.gameWriter} gameReader={props.gameReader} />
            </Col>
        </Row>
    )
}

export default EditGame;