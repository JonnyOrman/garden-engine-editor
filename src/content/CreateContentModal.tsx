import { useState } from 'react';
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
    typeForm = <CreateTriangle onHide={props.onHide} />;
  } else if (type == 'rectangle') {
    typeForm = <CreateRectangle onHide={props.onHide} />;
  } else if (type == 'EquilateralTriangle') {
    typeForm = <CreateEquilateralTriangle onHide={props.onHide} />;
  }

  return (
    <div {...props} aria-labelledby="create-content-modal">
      <div>
        <div id="create-content-modal">Modal heading</div>
      </div>
      <div>
        <h4>New Content</h4>
        {/* <Dropdown
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
        </Dropdown> */}
        {typeForm}
      </div>
      <div>
        <input onClick={props.onHide}>Close</input>
      </div>
    </div>
  );
}

export default CreateContentModal;
