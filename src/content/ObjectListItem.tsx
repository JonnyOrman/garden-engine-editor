import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import GameContentInstancesProvider from "../game/GameContentInstancesProvider";
import JsonContentInstanceWriter from "./instances/JsonContentInstanceWriter";
import ObjectListItemProps from "./ObjectListItemProps";
import RectangleInstance from "./rectangle/instances/RectangleInstance";
import RectangleInstancesModal from "./rectangle/instances/RectangleInstancesModal";
import TriangleInstance from "./triangle/instances/TriangleInstance";
import TriangleInstancesModal from "./triangle/instances/TriangleInstancesModal";

function ObjectListItem(props: ObjectListItemProps) {
    const [type, setType] = useState(props.object.type);
    const [instancesModalShow, setInstancesModalShow] = React.useState(false);

    let typeInstancesModal;
    if (type == 'triangle') {
        typeInstancesModal = <TriangleInstancesModal
            contentName={props.object.name}
            show={instancesModalShow}
            onHide={() => setInstancesModalShow(false)}
            triangleInstancesProvider={new GameContentInstancesProvider(props.gameReader)}
            triangleInstanceWriter={new JsonContentInstanceWriter<TriangleInstance>(props.gameReader, props.gameWriter)}
        />;
    } else if (type == 'rectangle') {
        typeInstancesModal = <RectangleInstancesModal
            contentName={props.object.name}
            show={instancesModalShow}
            onHide={() => setInstancesModalShow(false)}
            rectangleInstancesProvider={new GameContentInstancesProvider(props.gameReader)}
            rectangleInstanceWriter={new JsonContentInstanceWriter<RectangleInstance>(props.gameReader, props.gameWriter)}
        />;
    }

    return (
        <div>
            <h4>{props.object.name}</h4>
            <Button variant="secondary" onClick={() => setInstancesModalShow(true)}>View instances</Button>
            {typeInstancesModal}
        </div>
    )
}

export default ObjectListItem;