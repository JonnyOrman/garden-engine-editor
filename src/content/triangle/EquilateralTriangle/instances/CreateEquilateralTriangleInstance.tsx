import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentInstanceProps from '../../../instances/CreateContentInstanceProps';
import EquilateralTriangle from '../EquilateralTriangle';
import React from 'react';
import Name from '../../../../fields/name/NameEditor';
import ScaleEditor from '../../../../fields/scale/ScaleEditor';
import TwoDPoint from '../../../../fields/twoDPoint/TwoDPoint';
import TwoDPointEditor from '../../../../fields/twoDPoint/TwoDPointEditor';
import { useEquilateralTriangleInstanceWriter } from './useEquilateralTriangleInstanceWriter';

function CreateEquilateralTriangleInstance(
  props: CreateContentInstanceProps<EquilateralTriangle>
) {
    const equilateralTriangleInstanceWriter = useEquilateralTriangleInstanceWriter();

  const [name, setName] = react.useState('');
  const [scale, setScale] = react.useState(0);
  const [position, setPosition] = useState<TwoDPoint>({
    x: 0,
    y: 0,
  });

  const submit = async (e: any) => {
    e.preventDefault();

    await equilateralTriangleInstanceWriter.write({
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

export default CreateEquilateralTriangleInstance;
