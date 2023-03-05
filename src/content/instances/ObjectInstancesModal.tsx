import react, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Entity from "../../Entity";
import ContentInstance from "./ContentInstance";
import ContentInstancesModalProps from "./ContentInstancesModalProps";

function ObjectInstancesModal<TContent extends Entity, TContentInstance extends ContentInstance, TCreateContentInstance>(props: ContentInstancesModalProps<TContent, TContentInstance>) {
    const [contentInstances, setContentInstances] = react.useState<TContentInstance[]>();

    useEffect(() => {
        async function getContentInstances() {
            const contentInstances = await props.contentInstancesProvider.get(props.content.name);

            setContentInstances(contentInstances);
        };

        if (!contentInstances) {
            getContentInstances();
        }
    }, []);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="content-instances-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="content-instances-modal">
                    {props.content.name} instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Triangle instances</h4>
                <div>
                    {
                        contentInstances?.map((contentInstance: TContentInstance) => {
                            return <div>{contentInstance.name}, location: {contentInstance.position.x}, {contentInstance.position.y}</div>
                        })
                    }
                </div>
                {props.createContentInstance}
            </Modal.Body>
        </Modal>
    )
}

export default ObjectInstancesModal;