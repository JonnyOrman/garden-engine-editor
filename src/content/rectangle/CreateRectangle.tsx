import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Rectangle from './Rectangle';
import Name from '../../fields/name/NameEditor';
import Rgb from '../../fields/rgb/Rgb';
import SceneDimension from '../../fields/sceneDimension/SceneDimensionEditor';
import RgbEditor from '../../fields/rgb/RgbEditor';

function CreateRectangle(props: CreateContentProps<Rectangle>) {
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

    await props.contentWriter?.write({
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
      <Name onChange={setName} props={props.nameProps}></Name>
      <Form.Group>
        <SceneDimension
          dimension="Width"
          onChange={setWidth}
          props={props.sceneDimensionProps}
        />
        <SceneDimension
          dimension="Height"
          onChange={setHeight}
          props={props.sceneDimensionProps}
        />
        <RgbEditor onChange={setRgb} props={props.rgbProps}></RgbEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreateRectangle;
