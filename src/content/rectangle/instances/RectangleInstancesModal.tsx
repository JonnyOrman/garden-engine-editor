import react, { useEffect } from "react";
import Modal from "react-bootstrap/esm/Modal";
import CreateRectangleInstance from "./CreateRectangleInstance";
import RectangleInstance from "./RectangleInstance";
import RectangleInstancesModalProps from "./RectangleInstancesModalProps";

function RectangleInstancesModal(props: RectangleInstancesModalProps) {
    const [rectangleInstances, setRectangleInstances] = react.useState<RectangleInstance[]>();

    useEffect(() => {
        async function getTriangleInstances() {
            const rectangleInstances = await props.rectangleInstancesProvider.get(props.rectangle.name);

            setRectangleInstances(rectangleInstances);
        };

        if (!rectangleInstances) {
            getTriangleInstances();
        }
    }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="rectangle-instances-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="rectangle-instances-modal">
                    {props.rectangle.name} instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Rectangle instances</h4>
                <div>
                    {
                        rectangleInstances?.map((rectangleInstance: RectangleInstance) => {
                            return <div>{rectangleInstance.name}, location: {rectangleInstance.position.x}, {rectangleInstance.position.y}</div>
                        })
                    }
                </div>
                <CreateRectangleInstance rectangle={props.rectangle} rectangleInstanceWriter={props.contentInstanceWriter} />
            </Modal.Body>
        </Modal>
    )
}

export default RectangleInstancesModal;