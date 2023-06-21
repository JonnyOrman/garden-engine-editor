import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Triangle from './Triangle';
import Name from '../../fields/name/NameEditor';
import TwoDPoint from '../../fields/twoDPoint/TwoDPoint';
import Rgb from '../../fields/rgb/Rgb';
import TwoDPointEditor from '../../fields/twoDPoint/TwoDPointEditor';
import RgbEditor from '../../fields/rgb/RgbEditor';
import { useTriangleWriterContext } from './useTriangleWriterContext';

function CreateTriangle(props: CreateContentProps) {
  const triangleWriter = useTriangleWriterContext();

  const [name, setName] = useState('');
  const [point1, setPoint1] = useState<TwoDPoint>({
    x: 0,
    y: 0,
  });
  const [point1Rgb, setPoint1Rgb] = useState<Rgb>({
    r: 0,
    g: 0,
    b: 0,
  });
  const [point2, setPoint2] = useState<TwoDPoint>({
    x: 0,
    y: 0,
  });
  const [point2Rgb, setPoint2Rgb] = useState<Rgb>({
    r: 0,
    g: 0,
    b: 0,
  });
  const [point3, setPoint3] = useState<TwoDPoint>({
    x: 0,
    y: 0,
  });
  const [point3Rgb, setPoint3Rgb] = useState<Rgb>({
    r: 0,
    g: 0,
    b: 0,
  });

  const submit = async (e: any) => {
    e.preventDefault();

    await triangleWriter.write({
      name: name,
      type: 'triangle',
      point1: {
        twoDPoint: point1,
        rgb: point1Rgb,
      },
      point2: {
        twoDPoint: point2,
        rgb: point2Rgb,
      },
      point3: {
        twoDPoint: point3,
        rgb: point3Rgb,
      },
    });

    props.onHide();
  };

  return (
    <Form onSubmit={submit}>
      <Name onChange={setName}></Name>
      <Form.Group>
        <TwoDPointEditor onChange={setPoint1}></TwoDPointEditor>
        <RgbEditor onChange={setPoint1Rgb}></RgbEditor>
      </Form.Group>
      <Form.Group>
        <TwoDPointEditor onChange={setPoint2}></TwoDPointEditor>
        <RgbEditor onChange={setPoint2Rgb}></RgbEditor>
      </Form.Group>
      <Form.Group>
        <TwoDPointEditor onChange={setPoint3}></TwoDPointEditor>
        <RgbEditor onChange={setPoint3Rgb}></RgbEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreateTriangle;
