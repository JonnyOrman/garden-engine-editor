import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Game from './Game';
import Rectangle from '../content/rectangle/Rectangle';
import Scene from '../scene/Scene';
import RectangleInstance from '../content/rectangle/instances/RectangleInstance';
import CreateNewGameProps from './CreateNewGameProps';

function CreateNewGame(props: CreateNewGameProps) {
    const [name, setName] = useState('');
    const [sceneWidth, setSceneWidth] = useState(0);
    const [sceneHeight, setSceneHeight] = useState(0);

    const navigate = useNavigate();
    const goToCreateNewGame = () => {
        navigate("/create-new-game");
    }

    const submit = async (e: any) => {
        e.preventDefault();
        const game: Game = {
            name: name,
            scene: {
                width: sceneWidth,
                height: sceneHeight
            } as Scene,
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
                    } as Rectangle,
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
                    } as Rectangle
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
                } as RectangleInstance,
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
                } as RectangleInstance
            ]
        };

        props.gameWriter.write(game).then(() => {
            navigate('/edit-game');
        });
    };

    return (
        <Row>
            <h1>Create new game</h1>
            <Form
                onSubmit={submit}
            >
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control id="name"
                        type="text"
                        onChange={(e) => setName(e.currentTarget.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Scene width:
                    </Form.Label>
                    <Form.Control
                        id="scene-width"
                        type="number"
                        onChange={(e) => setSceneWidth(+e.currentTarget.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Scene height:
                    </Form.Label>
                    <Form.Control
                        id="scene-height"
                        type="number"
                        onChange={(e) => setSceneHeight(+e.currentTarget.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form>
        </Row>
    );
}

export default CreateNewGame;
