import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Name from '../../fields/name/NameEditor';
import Rgb from '../../fields/rgb/Rgb';
import Dimension from '../../fields/dimension/DimensionEditor';
import RgbEditor from '../../fields/rgb/RgbEditor';
import Rectangle from './Rectangle';
import { useRectangleSubmitter } from './useRectangleSubmitter';

function CreateRectangle(props: CreateContentProps) {
  const rectangleSubmitter = useRectangleSubmitter();

  const [rectangle, setRectangle] = useState<Rectangle>({
    name: '',
    type: 'rectangle',
    width: 0,
    height: 0,
    rgb: {
      r: 0,
      g: 0,
      b: 0
    }
  });

  const onNameValueChange = (newNameValue: string) => {
    setRectangle({
      name: newNameValue,
      type: rectangle.type,
      width: rectangle.width,
      height: rectangle.height,
      rgb: rectangle.rgb,
    });
  };

  const onWidthValueChange = (newWidthValue: number) => {
    setRectangle({
      name: rectangle.name,
      type: rectangle.type,
      width: newWidthValue,
      height: rectangle.height,
      rgb: rectangle.rgb,
    });
  };

  const onHeightValueChange = (newHeightValue: number) => {
    setRectangle({
      name: rectangle.name,
      type: rectangle.type,
      width: rectangle.width,
      height: newHeightValue,
      rgb: rectangle.rgb,
    });
  };

  const onRgbValueChange = (newRgbValue: Rgb) => {
    setRectangle({
      name: rectangle.name,
      type: rectangle.type,
      width: rectangle.width,
      height: rectangle.height,
      rgb: newRgbValue,
    });
  };

  const submit = async (e: any) => {
    await rectangleSubmitter.submit(rectangle, e, props.onHide);
  };

  return (
    <Form onSubmit={submit}>
      <Name onChange={onNameValueChange}></Name>
      <Form.Group>
        <Dimension dimension="Width" onChange={onWidthValueChange} />
        <Dimension dimension="Height" onChange={onHeightValueChange} />
        <RgbEditor onChange={onRgbValueChange}></RgbEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
}

export default CreateRectangle;
