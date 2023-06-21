import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Rectangle from './Rectangle';
import Name from '../../fields/name/NameEditor';
import Rgb from '../../fields/rgb/Rgb';
import Dimension from '../../fields/dimension/DimensionEditor';
import RgbEditor from '../../fields/rgb/RgbEditor';
import { RectangleWriterContext } from './RectangleWriterContext';

function CreateRectangle(props: CreateContentProps) {
  const rectangleWriter = useContext(RectangleWriterContext);

  const [name, setName] = useState('');
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rgb, setRgb] = useState<Rgb>({
    r: 0,
    g: 0,
    b: 0,
  });

  const submit = async (e: any) => {
    e.preventDefault();

    await rectangleWriter.write({
      name: name,
      type: 'rectangle',
      width: width,
      height: height,
      rgb: rgb,
    });

    props.onHide();
  };

  return (
    <Form onSubmit={submit}>
      <Name onChange={setName}></Name>
      <Form.Group>
        <Dimension dimension="Width" onChange={setWidth} />
        <Dimension dimension="Height" onChange={setHeight} />
        <RgbEditor onChange={setRgb}></RgbEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreateRectangle;
