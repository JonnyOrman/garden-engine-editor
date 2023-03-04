import react from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import CreateRectangleInstanceProps from "./CreateRectangleInstanceProps";

function CreateRectangleInstance(props: CreateRectangleInstanceProps) {
    const [name, setName] = react.useState('');
    const [scale, setScale] = react.useState(0);
    const [positionX, setPositionX] = react.useState(0);
    const [positionY, setPositionY] = react.useState(0);

    const submit = async (e: any) => {
        e.preventDefault();

        await props.rectangleInstanceWriter?.write({
            name: name,
            contentName: props.rectangle.name,
            scale: scale,
            position: {
                x: positionX,
                y: positionY
            },
            rgb: props.rectangle.rgb
        });
    }

    return (
        <div>
            <h4>Create new instance</h4>
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
                    <Form.Label>Scale:</Form.Label>
                    <Form.Control id="scale"
                        type="number"
                        onChange={(e) => setScale(+e.currentTarget.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Position X:</Form.Label>
                    <Form.Control id="position-x"
                        type="number"
                        onChange={(e) => setPositionX(+e.currentTarget.value)}>
                    </Form.Control>
                    <Form.Label>Position Y:</Form.Label>
                    <Form.Control id="position-y"
                        type="number"
                        onChange={(e) => setPositionY(+e.currentTarget.value)}>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Create</Button>
            </Form >
        </div>
    )
}

export default CreateRectangleInstance;