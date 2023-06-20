import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CreateContentModal from './CreateContentModal';
import EditContentProps from './EditContentProps';
import ObjectListItem from './ObjectListItem';

function EditContent(props: EditContentProps) {
  const [createContentModalShow, setCreateContentModalShow] =
    React.useState(false);

  return (
    <Col>
      <Row>
        {props?.content?.objects?.map((object: any) => {
          return (
            <ObjectListItem
              object={object || {}}
              gameReader={props.gameReader}
              gameWriter={props.gameWriter}
            />
          );
        })}
      </Row>
      <Row>
        <Button
          variant="primary"
          onClick={() => setCreateContentModalShow(true)}
        >
          Add content
        </Button>
      </Row>
      <CreateContentModal
        show={createContentModalShow}
        onHide={() => setCreateContentModalShow(false)}
        gameWriter={props.gameWriter}
        gameReader={props.gameReader}
      />
    </Col>
  );
}

export default EditContent;
