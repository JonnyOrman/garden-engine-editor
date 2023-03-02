import { useState } from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import CreateRectangle from "./CreateRectangle";
import CreateTriangle from "./CreateTriangle";
import JsonGameReader from "./JsonGameReader";
import JsonObjectWriter from "./JsonObjectWriter";
import Rectangle from "./Rectangle";
import Triangle from "./Triangle";

function CreateContentModal(props: any) {
    const [type, setType] = useState('');
    const [gameReader, setGameReader] = useState(new JsonGameReader());

    let typeForm;
    if (type == 'triangle') {
        typeForm = <CreateTriangle onHide={props.onHide} triangleWriter={new JsonObjectWriter<Triangle>(gameReader)} />;
    } else if (type == 'rectangle') {
        typeForm = <CreateRectangle onHide={props.onHide} rectangleWriter={new JsonObjectWriter<Rectangle>(gameReader)} />;
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="create-content-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="create-content-modal">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>New Content</h4>
                <Dropdown onSelect={(eventKey: any, event: Object) => { setType(eventKey) }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Type
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey={"triangle"} href="#">Triangle</Dropdown.Item>
                        <Dropdown.Item eventKey={"rectangle"} href="#">Rectangle</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {typeForm}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateContentModal;