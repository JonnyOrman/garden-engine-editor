import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Name from '../../fields/name/NameEditor';
import { TrianglePoint } from './TrianglePoint';
import TrianglePointEditor from './TrianglePointEditor';
import Triangle from './Triangle';
import { useTriangleSubmitter } from './useTriangleSubmitter';

function CreateTriangle(props: CreateContentProps) {
  const triangleSubmitter = useTriangleSubmitter();

  const [triangle, setTriangle] = useState<Triangle>({
    name: '',
    type: 'triangle',
    point1: {
      twoDPoint: {x: 0, y: 0},
      rgb: {r: 0, g: 0, b: 0}
    },
    point2: {
      twoDPoint: {x: 0, y: 0},
      rgb: {r: 0, g: 0, b: 0}
    },
    point3: {
      twoDPoint: {x: 0, y: 0},
      rgb: {r: 0, g: 0, b: 0}
    }
  });

  const onNameValueChange = (newNameValue: string) => {
    setTriangle({
      name: newNameValue,
    type: triangle.type,
    point1: triangle.point1,
    point2: triangle.point2,
    point3: triangle.point3
    });
  };

  const onPoint1ValueChange = (newPoint1Value: TrianglePoint) => {
    setTriangle({
      name: triangle.name,
    type: triangle.type,
    point1: newPoint1Value,
    point2: triangle.point2,
    point3: triangle.point3
    });
  };

  const onPoint2ValueChange = (newPoint2Value: TrianglePoint) => {
    setTriangle({
      name: triangle.name,
    type: triangle.type,
    point1: triangle.point1,
    point2: newPoint2Value,
    point3: triangle.point3
    });
  };

  const onPoint3ValueChange = (newPoint3Value: TrianglePoint) => {
    setTriangle({
      name: triangle.name,
    type: triangle.type,
    point1: triangle.point1,
    point2: triangle.point2,
    point3: newPoint3Value
    });
  };
  
  const submit = async (e: any) => {
    await triangleSubmitter.submit(triangle, e, props.onHide);
  };

  return (
    <Form onSubmit={submit}>
      <Name onChange={onNameValueChange}></Name>
      <Form.Group>
        <TrianglePointEditor onChange={onPoint1ValueChange}></TrianglePointEditor>
      </Form.Group>
      <Form.Group>
        <TrianglePointEditor onChange={onPoint2ValueChange}></TrianglePointEditor>
      </Form.Group>
      <Form.Group>
        <TrianglePointEditor onChange={onPoint3ValueChange}></TrianglePointEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreateTriangle;
