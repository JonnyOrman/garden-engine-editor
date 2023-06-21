import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Name from '../../fields/name/NameEditor';
import { useTriangleWriter } from './useTriangleWriter';
import { TrianglePoint } from './TrianglePoint';
import TrianglePointEditor from './TrianglePointEditor';

function CreateTriangle(props: CreateContentProps) {
  const triangleWriter = useTriangleWriter();

  const [name, setName] = useState('');

  const [point1, setPoint1] = useState<TrianglePoint>({
    twoDPoint: {x: 0, y: 0},
    rgb: {r: 0, g: 0, b: 0}
  });

  const [point2, setPoint2] = useState<TrianglePoint>({
    twoDPoint: {x: 0, y: 0},
    rgb: {r: 0, g: 0, b: 0}
  });

  const [point3, setPoint3] = useState<TrianglePoint>({
    twoDPoint: {x: 0, y: 0},
    rgb: {r: 0, g: 0, b: 0}
  })

  const submit = async (e: any) => {
    e.preventDefault();

    await triangleWriter.write({
      name: name,
      type: 'triangle',
      point1: point1,
      point2: point2,
      point3: point3,
    });

    props.onHide();
  };

  return (
    <Form onSubmit={submit}>
      <Name onChange={setName}></Name>
      <Form.Group>
        <TrianglePointEditor onChange={setPoint1}></TrianglePointEditor>
      </Form.Group>
      <Form.Group>
        <TrianglePointEditor onChange={setPoint2}></TrianglePointEditor>
      </Form.Group>
      <Form.Group>
        <TrianglePointEditor onChange={setPoint3}></TrianglePointEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreateTriangle;
