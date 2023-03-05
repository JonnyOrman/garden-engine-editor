import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Entity from "../../Entity";
import ContentInstance from "./ContentInstance";
import ContentInstanceListItem from "./ContentInstanceListItem";
import ContentInstancesModalProps from "./ContentInstancesModalProps";

function ContentInstancesModal<TContent extends Entity, TContentInstance extends ContentInstance>(props: ContentInstancesModalProps<TContent, TContentInstance>) {
    const [contentInstances, setContentInstances] = React.useState<TContentInstance[]>();

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
                    {props.content.name} Instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Content instances</h4>
                <div>
                    {
                        contentInstances?.map((contentInstance: TContentInstance) => {
                            return <ContentInstanceListItem contentInstance={contentInstance || {}} />
                        })
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ContentInstancesModal;