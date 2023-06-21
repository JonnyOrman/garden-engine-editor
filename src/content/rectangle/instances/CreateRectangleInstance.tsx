import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/esm/Form';
import CreateContentInstanceProps from '../../instances/CreateContentInstanceProps';
import Rectangle from '../Rectangle';
import React from 'react';
import Name from '../../../fields/name/NameEditor';
import ScaleEditor from '../../../fields/scale/ScaleEditor';
import TwoDPointEditor from '../../../fields/twoDPoint/TwoDPointEditor';
import TwoDPoint from '../../../fields/twoDPoint/TwoDPoint';
import { useRectangleInstanceSubmitter } from './useRectangleInstanceSubmitter';
import RectangleInstance from './RectangleInstance';
import { useSubmitter } from '../../useSubmitter';

function CreateRectangleInstance(
  props: CreateContentInstanceProps<Rectangle>
) {
  const [submit, handleChange, value] = useSubmitter<RectangleInstance>({
      name: '',
      contentName: '',
      scale: 0,
      position: {x: 0, y: 0 },
      rgb: props.content.rgb,
    },
    useRectangleInstanceSubmitter(),
  () => {});

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        contentName: value.contentName,
        scale: value.scale,
        position: value.position,
        rgb: value.rgb,
      }
    });
  };

  const onScaleValueChange = (newScaleValue: number) => {
    handleChange<number>(newScaleValue, (newScaleValue: number) => {
      return {
        name: value.name,
        contentName: value.contentName,
        scale: newScaleValue,
        position: value.position,
        rgb: value.rgb,
      }
    });
  };

  const onPositionValueChange = (newPositionValue: TwoDPoint) => {
    handleChange<TwoDPoint>(newPositionValue, (newPositionValue: TwoDPoint) => {
      return {
        name: value.name,
        contentName: value.contentName,
        scale: value.scale,
        position: newPositionValue,
        rgb: value.rgb,
      }
    });
  };

  return (
    <div>
      <h4>Create new instance</h4>
      <Form onSubmit={submit}>
        <Name onChange={onNameValueChange}></Name>
        <ScaleEditor onChange={onScaleValueChange}></ScaleEditor>
        <TwoDPointEditor onChange={onPositionValueChange}></TwoDPointEditor>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
}

export default CreateRectangleInstance;
