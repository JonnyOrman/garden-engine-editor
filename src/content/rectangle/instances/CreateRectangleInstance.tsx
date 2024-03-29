import CreateContentInstanceProps from '../../instances/CreateContentInstanceProps';
import Rectangle from '../Rectangle';
import React from 'react';
import NameEditor from '../../../fields/name/NameEditor';
import ScaleEditor from '../../../fields/scale/ScaleEditor';
import TwoDPointEditor from '../../../fields/twoDPoint/TwoDPointEditor';
import TwoDPoint from '../../../fields/twoDPoint/TwoDPoint';
import { useRectangleInstanceSubmitter } from './useRectangleInstanceSubmitter';
import RectangleInstance from './RectangleInstance';
import { useSubmitter } from '../../useSubmitter';
import Form from '../../../forms/Form';

function CreateRectangleInstance(props: CreateContentInstanceProps<Rectangle>) {
  const defaultValue = {
    name: '',
    type: 'Rectangle',
    contentName: '',
    scale: 0,
    position: {
      x: 0,
      y: 0,
    },
    rgb: props.content.rgb,
  };

  const [submit, handleChange, value] = useSubmitter<RectangleInstance>(
    defaultValue,
    useRectangleInstanceSubmitter(),
    () => {}
  );

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        type: 'Rectangle',
        contentName: value.contentName,
        scale: value.scale,
        position: value.position,
        rgb: value.rgb,
      };
    });
  };

  const onScaleValueChange = (newScaleValue: number) => {
    handleChange<number>(newScaleValue, (newScaleValue: number) => {
      return {
        name: value.name,
        type: 'Rectangle',
        contentName: value.contentName,
        scale: newScaleValue,
        position: value.position,
        rgb: value.rgb,
      };
    });
  };

  const onPositionValueChange = (newPositionValue: TwoDPoint) => {
    handleChange<TwoDPoint>(newPositionValue, (newPositionValue: TwoDPoint) => {
      return {
        name: value.name,
        type: 'Rectangle',
        contentName: value.contentName,
        scale: value.scale,
        position: newPositionValue,
        rgb: value.rgb,
      };
    });
  };

  const buildValue = () => {
    return {
      name: value.name,
      contentName: value.contentName,
      scale: value.scale,
      position: value.position,
      rgb: value.rgb,
    };
  };

  return (
    <Form
      buildValue={buildValue}
      onSubmit={submit}
      defaultValue={defaultValue}
      dependencies={[]}
    >
      <NameEditor onChange={onNameValueChange} />
      <ScaleEditor onChange={onScaleValueChange} />
      <TwoDPointEditor onChange={onPositionValueChange} />
    </Form>
  );
}

export default CreateRectangleInstance;
