import React from "react";
import Button from "react-bootstrap/Button";
import ContentInstancesModal from "./ContentInstancesModal";

function ObjectListItem(props: any) {
    const [contentInstancesModalShow, setContentInstancesModalShow] = React.useState(false);

    return (
        <div>
            <h4>{props.object.name}</h4>
            <Button variant="secondary" onClick={() => setContentInstancesModalShow(true)}>View instances</Button>

            <ContentInstancesModal
                show={contentInstancesModalShow}
                onHide={() => setContentInstancesModalShow(false)}
            />
        </div>
    )
}

export default ObjectListItem;