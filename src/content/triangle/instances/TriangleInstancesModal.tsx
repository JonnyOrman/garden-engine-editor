import react, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import TriangleInstance from "./TriangleInstance";
import TriangleInstancesModalProps from "./TriangleInstancesModalProps";

function TriangleInstancesModal(props: TriangleInstancesModalProps) {
    const [triangleInstances, setTriangleInstances] = react.useState<TriangleInstance[]>();

    useEffect(() => {
        async function getTriangleInstances() {
            const triangleInstances = await props.triangleInstancesProvider.get(props.contentName);

            setTriangleInstances(triangleInstances);
        };

        if (!triangleInstances) {
            getTriangleInstances();
        }
    }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="triangle-instances-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="triangle-instances-modal">
                    {props.contentName} instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Triangle instances</h4>
                {
                    triangleInstances?.map((triangleInstance: TriangleInstance) => {
                        return <div>{triangleInstance.name}, location: {triangleInstance.position.x}, {triangleInstance.position.y}</div>
                    })
                }
            </Modal.Body>
        </Modal>
    )
}

export default TriangleInstancesModal;