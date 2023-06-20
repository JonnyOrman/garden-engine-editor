import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import CreateContentInstanceProps from '../../instances/CreateContentInstanceProps';
import Rectangle from '../Rectangle';
import RectangleInstance from './RectangleInstance';
import React from 'react';
import Name from '../../../fields/name/NameEditor';
import ScaleEditor from '../../../fields/scale/ScaleEditor';
import TwoDPointEditor from '../../../fields/twoDPoint/TwoDPointEditor';

function CreateRectangleInstance(
  props: CreateContentInstanceProps<Rectangle, RectangleInstance>
) {
  const [name, setName] = useState('');
  const [scale, setScale] = useState(0);
  const [position, setPosition] = useState({
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
      rgb: props.content.rgb,
    });
  };

  return (
    <div>
      <h4>Create new instance</h4>
      <Form onSubmit={submit}>
        <Name onChange={setName}></Name>
        <ScaleEditor onChange={setScale}></ScaleEditor>
        <TwoDPointEditor onChange={setPosition}></TwoDPointEditor>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateRectangleInstance;
