import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function CreateContentModal(props: any) {
    const [name, setName] = useState('');

    const submit = async (e: any) => {
        e.preventDefault();
        alert('New content submitted');
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
                    <Button variant="primary" type="submit">Create</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateContentModal;