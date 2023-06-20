import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import GameContentInstancesProvider from '../game/GameContentInstancesProvider';
import JsonContentInstanceWriter from './instances/JsonContentInstanceWriter';
import ObjectInstancesModal from './instances/ObjectInstancesModal';
import ObjectListItemProps from './ObjectListItemProps';
import CreateRectangleInstance from './rectangle/instances/CreateRectangleInstance';
import RectangleInstance from './rectangle/instances/RectangleInstance';
import Rectangle from './rectangle/Rectangle';
import CreateTriangleInstance from './triangle/instances/CreateTriangleInstance';
import Triangle from './triangle/Triangle';
import { TriangleInstance } from './triangle/instances/TriangleInstance';
import { GameReaderContext, GameWriterContext } from '../App';

function ObjectListItem(props: ObjectListItemProps) {
  const gameReader = useContext(GameReaderContext);
  const gameWriter = useContext(GameWriterContext);

  const [instancesModalShow, setInstancesModalShow] = React.useState(false);
  const [contentInstanceWriter, setContentInstanceWriter] = React.useState(
    new JsonContentInstanceWriter<TriangleInstance>(gameReader, gameWriter)
  );

  let typeInstancesModal;
  if (props.object.type == 'triangle') {
    typeInstancesModal = (
      <ObjectInstancesModal
        content={props.object as Triangle}
        show={instancesModalShow}
        onHide={() => setInstancesModalShow(false)}
        contentInstancesProvider={
          new GameContentInstancesProvider<TriangleInstance>(gameReader)
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
  } else if (props.object.type == 'rectangle') {
    typeInstancesModal = (
      <ObjectInstancesModal
        content={props.object as Rectangle}
        show={instancesModalShow}
        onHide={() => setInstancesModalShow(false)}
        contentInstancesProvider={
          new GameContentInstancesProvider<RectangleInstance>(gameReader)
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
