import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentInstanceProps from '../../instances/CreateContentInstanceProps';
import Triangle from '../Triangle';
import React from 'react';
import Name from '../../../fields/name/NameEditor';
import Scale from '../../../fields/scale/ScaleEditor';
import TwoDPoint from '../../../fields/twoDPoint/TwoDPoint';
import { TriangleInstance } from './TriangleInstance';
import TwoDPointEditor from '../../../fields/twoDPoint/TwoDPointEditor';

function CreateTriangleInstance(
  props: CreateContentInstanceProps<Triangle, TriangleInstance>
) {
  const [name, setName] = react.useState('');
  const [scale, setScale] = react.useState(0);
  const [position, setPosition] = useState<TwoDPoint>({
    x: 0,
    y: 0,
  });

  const submit = async (e: any) => {
    e.preventDefault();

    await props.contentInstanceWriter?.write({
      name: name,
      contentName: props.content.name,
      scale: scale,
      position: position,
    });
  };

  return (
    <div>
      <h4>Create new instance</h4>
      <Form onSubmit={submit}>
        <Name onChange={setName} props={props.nameProps}></Name>
        <Scale onChange={setScale} props={props.scaleProps}></Scale>
        <TwoDPointEditor
          onChange={setPosition}
          props={props.twoDPointProps}
        ></TwoDPointEditor>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateTriangleInstance;
