import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../CreateContentProps';
import Name from '../../fields/name/NameEditor';
import Rgb from '../../fields/rgb/Rgb';
import Dimension from '../../fields/dimension/DimensionEditor';
import RgbEditor from '../../fields/rgb/RgbEditor';
import Rectangle from './Rectangle';
import { useRectangleSubmitter } from './useRectangleSubmitter';
import { useSubmitter } from '../useSubmitter';

function CreateRectangle(props: CreateContentProps) {
  const [submit, handleChange, value] = useSubmitter<Rectangle>({
        name: '',
        type: 'rectangle',
        width: 0,
        height: 0,
        rgb: {
          r: 0,
          g: 0,
          b: 0
        }
      },
      useRectangleSubmitter(),
  () => {});

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        type: value.type,
        width: value.width,
        height: value.height,
        rgb: value.rgb,
      }
    });
  };

  const onWidthValueChange = (newWidthValue: number) => {
    handleChange<number>(newWidthValue, (newWidthValue: number) => {
      return {
        name: value.name,
        type: value.type,
        width: newWidthValue,
        height: value.height,
        rgb: value.rgb,
      }
    });
  };

  const onHeightValueChange = (newHeightValue: number) => {
    handleChange<number>(newHeightValue, (newHeightValue: number) => {
      return {
        name: value.name,
        type: value.type,
        width: value.width,
        height: newHeightValue,
        rgb: value.rgb,
      }
    });
  };

  const onRgbValueChange = (newRgbValue: Rgb) => {
    handleChange<Rgb>(newRgbValue, (newRgbValue: Rgb) => {
      return {
        name: value.name,
        type: value.type,
        width: value.width,
        height: value.height,
        rgb: newRgbValue,
      }
    });
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
