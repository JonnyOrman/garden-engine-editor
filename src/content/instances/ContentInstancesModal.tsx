import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import ContentInstance from "./ContentInstance";
import ContentInstanceListItem from "./ContentInstanceListItem";
import ContentInstancesModalProps from "./ContentInstancesModalProps";

function ContentInstancesModal(props: ContentInstancesModalProps) {
    const [contentInstances, setContentInstances] = React.useState<ContentInstance[]>();

    useEffect(() => {
        async function getContentInstances() {
            const contentInstances = await props.contentInstancesProvider.get(props.contentName);

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
                    {props.contentName} Instances
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Content instances</h4>
                <div>
                    {
                        contentInstances?.map((contentInstance: ContentInstance) => {
                            return <ContentInstanceListItem contentInstance={contentInstance || {}} />
                        })
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default ContentInstancesModal;