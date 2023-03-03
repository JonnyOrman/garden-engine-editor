import React from "react";
import Button from "react-bootstrap/Button";
import GameContentInstancesProvider from "../game/GameContentInstancesProvider";
import ContentInstancesModal from "./instances/ContentInstancesModal";
import ObjectListItemProps from "./ObjectListItemProps";

function ObjectListItem(props: ObjectListItemProps) {
    const [contentInstancesModalShow, setContentInstancesModalShow] = React.useState(false);

    return (
        <div>
            <h4>{props.object.name}</h4>
            <Button variant="secondary" onClick={() => setContentInstancesModalShow(true)}>View instances</Button>

            <ContentInstancesModal
                show={contentInstancesModalShow}
                onHide={() => setContentInstancesModalShow(false)}
                contentName={props.object.name}
                contentInstancesProvider={new GameContentInstancesProvider(props.gameReader)}
            />
        </div>
    )
}

export default ObjectListItem;