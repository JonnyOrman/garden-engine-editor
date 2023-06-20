import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ObjectInstancesModal from './instances/ObjectInstancesModal';
import ObjectListItemProps from './ObjectListItemProps';
import CreateRectangleInstance from './rectangle/instances/CreateRectangleInstance';
import Rectangle from './rectangle/Rectangle';
import CreateTriangleInstance from './triangle/instances/CreateTriangleInstance';
import Triangle from './triangle/Triangle';
import { TriangleInstanceWriterContext } from './triangle/instances/TriangleInstanceWriterContext';
import { RectangleInstanceWriterContext } from './rectangle/instances/RectangleInstanceWriterContext';
import { RectangleInstanceProviderContext } from './rectangle/instances/RectangleInstanceProviderContext';
import { TriangleInstanceProviderContext } from './triangle/instances/TriangleInstanceProviderContext';

function ObjectListItem(props: ObjectListItemProps) {
  const triangleInstanceProvider = useContext(TriangleInstanceProviderContext);
  const triangleInstanceWriter = useContext(TriangleInstanceWriterContext);
  const rectangleInstanceProvider = useContext(
    RectangleInstanceProviderContext
  );
  const rectangleInstanceWriter = useContext(RectangleInstanceWriterContext);

  const [instancesModalShow, setInstancesModalShow] = React.useState(false);

  let typeInstancesModal;
  if (props.object.type == 'triangle') {
    typeInstancesModal = (
      <ObjectInstancesModal
        content={props.object as Triangle}
        show={instancesModalShow}
        onHide={() => setInstancesModalShow(false)}
        contentInstancesProvider={triangleInstanceProvider}
        contentInstanceWriter={triangleInstanceWriter}
        createContentInstance={
          <CreateTriangleInstance
            content={props.object as Triangle}
            contentInstanceWriter={triangleInstanceWriter}
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
        contentInstancesProvider={rectangleInstanceProvider}
        contentInstanceWriter={rectangleInstanceWriter}
        createContentInstance={
          <CreateRectangleInstance
            content={props.object as Rectangle}
            contentInstanceWriter={rectangleInstanceWriter}
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
