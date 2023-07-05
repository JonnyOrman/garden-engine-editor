import React from 'react';
import Name from '../../fields/name/NameEditor';
import Rgb from '../../fields/rgb/Rgb';
import Dimension from '../../fields/dimension/DimensionEditor';
import RgbEditor from '../../fields/rgb/RgbEditor';
import Rectangle from './Rectangle';
import { useRectangleSubmitter } from './useRectangleSubmitter';
import { useSubmitter } from '../useSubmitter';
import Form from '../../forms/Form';

function CreateRectangle() {
  const [submit, handleChange, value] = useSubmitter<Rectangle>(
    {
      name: '',
      type: 'rectangle',
      width: 0,
      height: 0,
      rgb: {
        r: 0,
        g: 0,
        b: 0,
      },
    },
    useRectangleSubmitter(),
    () => {}
  );

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        type: value.type,
        width: value.width,
        height: value.height,
        rgb: value.rgb,
      };
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
      };
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
      };
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
      };
    });
  };

  const buildValue = () => {
    return {
      name: value.name,
      type: value.type,
      width: value.width,
      height: value.height,
      rgb: value.rgb,
    };
  };

  const onSubmit = (rectangle: Rectangle, e: any) => {
    submit(e);
  };

  const defaultValue = {
    name: '',
    type: 'rectangle',
    width: 0,
    height: 0,
    rgb: {
      r: 0,
      g: 0,
      b: 0,
    },
  };

  return (
    <Form
      buildValue={buildValue}
      onSubmit={onSubmit}
      defaultValue={defaultValue}
      dependencies={[]}
    >
      <Name onChange={onNameValueChange}></Name>
      <Dimension dimension="Width" onChange={onWidthValueChange} />
      <Dimension dimension="Height" onChange={onHeightValueChange} />
      <RgbEditor onChange={onRgbValueChange}></RgbEditor>
    </Form>
  );
}

export default CreateRectangle;
