import Modal from "react-bootstrap/Modal";

function ContentInstancesModal(props: any) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="content-instances-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="content-instances-modal">
                    Content Instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Content instances</h4>
            </Modal.Body>
        </Modal>
    )
}

export default ContentInstancesModal;