import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import CreateTriangle from './triangle/CreateTriangle';
import CreateContentModalProps from './CreateContentModalProps';
import CreateRectangle from './rectangle/CreateRectangle';
import React from 'react';
import CreateEquilateralTriangle from './triangle/EquilateralTriangle/CreateEquilateralTriangle';
import useContentTypes from './useContentTypes';

function CreateContentModal(props: CreateContentModalProps) {
  const [type, setType] = useState('');

  const contentTypes = useContentTypes();

  let typeForm;
  if (type == 'triangle') {
    typeForm = (
      <CreateTriangle onHide={props.onHide} />
    );
  } else if (type == 'rectangle') {
    typeForm = (
      <CreateRectangle onHide={props.onHide} />
    );
  } else if (type == 'EquilateralTriangle') {
    typeForm = (
      <CreateEquilateralTriangle onHide={props.onHide} />
    );
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="create-content-modal" centered>
      <Modal.Header closeButton>
        <Modal.Title id="create-content-modal">Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>New Content</h4>
        <Dropdown
          onSelect={(eventKey: any, event: any) => {
            setType(eventKey);
          }}
        >
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Type
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {contentTypes.map((contentType: any) => {
              return <Dropdown.Item eventKey={contentType.type} href="#">
                {contentType.name}
              </Dropdown.Item>
            })}
          </Dropdown.Menu>
        </Dropdown>
        {typeForm}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateContentModal;
