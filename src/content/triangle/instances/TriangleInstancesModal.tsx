import react, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ContentInstancesModalProps from "../../instances/ContentInstancesModalProps";
import Triangle from "../Triangle";
import CreateTriangleInstance from "./CreateTriangleInstance";
import TriangleInstance from "./TriangleInstance";

function TriangleInstancesModal(props: ContentInstancesModalProps<Triangle, TriangleInstance>) {
    const [triangleInstances, setTriangleInstances] = react.useState<TriangleInstance[]>();

    useEffect(() => {
        async function getTriangleInstances() {
            const triangleInstances = await props.contentInstancesProvider.get(props.content.name);

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
                    {props.content.name} instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Triangle instances</h4>
                <div>
                    {
                        triangleInstances?.map((triangleInstance: TriangleInstance) => {
                            return <div>{triangleInstance.name}, location: {triangleInstance.position.x}, {triangleInstance.position.y}</div>
                        })
                    }
                </div>
                <CreateTriangleInstance content={props.content} contentInstanceWriter={props.contentInstanceWriter} />
            </Modal.Body>
        </Modal>
    )
}

export default TriangleInstancesModal;