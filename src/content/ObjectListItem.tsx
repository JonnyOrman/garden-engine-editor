import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import GameContentInstancesProvider from '../game/GameContentInstancesProvider';
import JsonContentInstanceWriter from './instances/JsonContentInstanceWriter';
import ObjectInstancesModal from './instances/ObjectInstancesModal';
import ObjectListItemProps from './ObjectListItemProps';
import CreateRectangleInstance from './rectangle/instances/CreateRectangleInstance';
import RectangleInstance from './rectangle/instances/RectangleInstance';
import Rectangle from './rectangle/Rectangle';
import CreateTriangleInstance from './triangle/instances/CreateTriangleInstance';
import TriangleInstance from './triangle/instances/TriangleInstance';
import Triangle from './triangle/Triangle';

function ObjectListItem(props: ObjectListItemProps) {
  const [type, setType] = useState(props.object.type);
  const [instancesModalShow, setInstancesModalShow] = React.useState(false);
  const [contentInstanceWriter, setContentInstanceWriter] = React.useState(
    new JsonContentInstanceWriter<TriangleInstance>(
      props.gameReader,
      props.gameWriter
    )
  );

  let typeInstancesModal;
  if (type == 'triangle') {
    typeInstancesModal = (
      <ObjectInstancesModal
        content={props.object as Triangle}
        show={instancesModalShow}
        onHide={() => setInstancesModalShow(false)}
        contentInstancesProvider={
          new GameContentInstancesProvider<TriangleInstance>(props.gameReader)
        }
        contentInstanceWriter={contentInstanceWriter}
        createContentInstance={
          <CreateTriangleInstance
            content={props.object as Triangle}
            contentInstanceWriter={contentInstanceWriter}
          />
        }
      />
    );
  } else if (type == 'rectangle') {
    typeInstancesModal = (
      <ObjectInstancesModal
        content={props.object as Rectangle}
        show={instancesModalShow}
        onHide={() => setInstancesModalShow(false)}
        contentInstancesProvider={
          new GameContentInstancesProvider<RectangleInstance>(props.gameReader)
        }
        contentInstanceWriter={contentInstanceWriter}
        createContentInstance={
          <CreateRectangleInstance
            content={props.object as Rectangle}
            contentInstanceWriter={contentInstanceWriter}
          />
        }
      />
    );
  }

  return (
    <div>
      <h4>{props.object.name}</h4>
      <Button variant="secondary" onClick={() => setInstancesModalShow(true)}>
        View instances
      </Button>
      {typeInstancesModal}
    </div>
  );
}

export default ObjectListItem;
