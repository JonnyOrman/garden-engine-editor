import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CreateContentProps from "../CreateContentProps";
import Rectangle from "./Rectangle";

function CreateRectangle(props: CreateContentProps<Rectangle>) {
    const [name, setName] = useState('');
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [r, setR] = useState(0);
    const [g, setG] = useState(0);
    const [b, setB] = useState(0);

    const submit = async (e: any) => {
        e.preventDefault();

        await props.contentWriter?.write({
            name: name,
            type: 'rectangle',
            width: width,
            height: height,
            rgb: {
                r: r,
                g: g,
                b: b
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
                <Form.Label>Width:</Form.Label>
                <Form.Control id="width"
                    type="number"
                    onChange={(e) => setWidth(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>Height:</Form.Label>
                <Form.Control id="height"
                    type="number"
                    onChange={(e) => setHeight(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>R:</Form.Label>
                <Form.Control id="r"
                    type="number"
                    onChange={(e) => setR(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>G:</Form.Label>
                <Form.Control id="g"
                    type="number"
                    onChange={(e) => setG(+e.currentTarget.value)}>
                </Form.Control>
                <Form.Label>B:</Form.Label>
                <Form.Control id="b"
                    type="number"
                    onChange={(e) => setB(+e.currentTarget.value)}>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">Create</Button>
        </Form>
    )
}

export default CreateRectangle;