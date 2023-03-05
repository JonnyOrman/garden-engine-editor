import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CreateContentProps from "../CreateContentProps";
import Triangle from "./Triangle";

function CreateTriangle(props: CreateContentProps<Triangle>) {
    const [name, setName] = useState('');
    const [point1X, setPoint1X] = useState(0);
    const [point1Y, setPoint1Y] = useState(0);
    const [point1R, setPoint1R] = useState(0);
    const [point1G, setPoint1G] = useState(0);
    const [point1B, setPoint1B] = useState(0);
    const [point2X, setPoint2X] = useState(0);
    const [point2Y, setPoint2Y] = useState(0);
    const [point2R, setPoint2R] = useState(0);
    const [point2G, setPoint2G] = useState(0);
    const [point2B, setPoint2B] = useState(0);
    const [point3X, setPoint3X] = useState(0);
    const [point3Y, setPoint3Y] = useState(0);
    const [point3R, setPoint3R] = useState(0);
    const [point3G, setPoint3G] = useState(0);
    const [point3B, setPoint3B] = useState(0);

    const submit = async (e: any) => {
        e.preventDefault();

        await props.contentWriter?.write({
            name: name,
            type: 'triangle',
            point1: {
                twoDPoint: {
                    x: point1X,
                    y: point1Y
                },
                rgb: {
                    r: point1R,
                    g: point1G,
                    b: point1B
                }
            },
            point2: {
                twoDPoint: {
                    x: point2X,
                    y: point2Y
                },
                rgb: {
                    r: point2R,
                    g: point2G,
                    b: point2B
                }
            },
            point3: {
                twoDPoint: {
                    x: point3X,
                    y: point3Y
                },
                rgb: {
                    r: point3R,
                    g: point3G,
                    b: point3B
                }
            }
        });

        props.onHide();
    }

    return (
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
                <Form.Label>Point 1 X:</Form.Label>
                <Form.Control id="point1x"
                    type="number"
                    onChange={(e) => setPoint1X(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 1 Y:</Form.Label>
                <Form.Control id="point1y"
                    type="number"
                    onChange={(e) => setPoint1Y(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 1 R:</Form.Label>
                <Form.Control id="point1r"
                    type="number"
                    onChange={(e) => setPoint1R(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 1 G:</Form.Label>
                <Form.Control id="point1g"
                    type="number"
                    onChange={(e) => setPoint1G(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 1 B:</Form.Label>
                <Form.Control id="point1b"
                    type="number"
                    onChange={(e) => setPoint1B(+e.currentTarget.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Point 2 X:</Form.Label>
                <Form.Control id="point2x"
                    type="number"
                    onChange={(e) => setPoint2X(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 2 Y:</Form.Label>
                <Form.Control id="point2y"
                    type="number"
                    onChange={(e) => setPoint2Y(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 2 R:</Form.Label>
                <Form.Control id="point2r"
                    type="number"
                    onChange={(e) => setPoint2R(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 2 G:</Form.Label>
                <Form.Control id="point2g"
                    type="number"
                    onChange={(e) => setPoint2G(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 2 B:</Form.Label>
                <Form.Control id="point2b"
                    type="number"
                    onChange={(e) => setPoint2B(+e.currentTarget.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Point 3 X:</Form.Label>
                <Form.Control id="point3x"
                    type="number"
                    onChange={(e) => setPoint3X(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 3 Y:</Form.Label>
                <Form.Control id="point3y"
                    type="number"
                    onChange={(e) => setPoint3Y(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 3 R:</Form.Label>
                <Form.Control id="point3r"
                    type="number"
                    onChange={(e) => setPoint3R(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 3 G:</Form.Label>
                <Form.Control id="point3g"
                    type="number"
                    onChange={(e) => setPoint3G(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Point 3 B:</Form.Label>
                <Form.Control id="point3b"
                    type="number"
                    onChange={(e) => setPoint3B(+e.currentTarget.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Create</Button>
        </Form>
    )
}

export default CreateTriangle;