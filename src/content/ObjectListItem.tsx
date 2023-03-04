import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import GameContentInstancesProvider from "../game/GameContentInstancesProvider";
import JsonContentInstanceWriter from "./instances/JsonContentInstanceWriter";
import ObjectListItemProps from "./ObjectListItemProps";
import RectangleInstancesModal from "./rectangle/instances/RectangleInstancesModal";
import Rectangle from "./rectangle/Rectangle";
import TriangleInstance from "./triangle/instances/TriangleInstance";
import TriangleInstancesModal from "./triangle/instances/TriangleInstancesModal";
import Triangle from "./triangle/Triangle";

function ObjectListItem(props: ObjectListItemProps) {
    const [type, setType] = useState(props.object.type);
    const [instancesModalShow, setInstancesModalShow] = React.useState(false);
    const [contentInstanceWriter, setContentInstanceWriter] = React.useState(new JsonContentInstanceWriter<TriangleInstance>(props.gameReader, props.gameWriter));

    let typeInstancesModal;
    if (type == 'triangle') {
        typeInstancesModal = <TriangleInstancesModal
            triangle={props.object as Triangle}
            show={instancesModalShow}
            onHide={() => setInstancesModalShow(false)}
            triangleInstancesProvider={new GameContentInstancesProvider(props.gameReader)}
            contentInstanceWriter={contentInstanceWriter}
        />;
    } else if (type == 'rectangle') {
        typeInstancesModal = <RectangleInstancesModal
            rectangle={props.object as Rectangle}
            show={instancesModalShow}
            onHide={() => setInstancesModalShow(false)}
            rectangleInstancesProvider={new GameContentInstancesProvider(props.gameReader)}
            contentInstanceWriter={contentInstanceWriter}
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