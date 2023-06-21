import { useState } from 'react';
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

function CreateRectangleInstance(
  props: CreateContentInstanceProps<Rectangle>
) {
  const rectangleInstanceSubmitter = useRectangleInstanceSubmitter();

  const [rectangleInstance, setRectangleInstance] = useState<RectangleInstance>({
      name: '',
      contentName: '',
      scale: 0,
      position: {x: 0, y: 0 },
      rgb: props.content.rgb,
  });

  const onNameValueChange = (newNameValue: string) => {
    setRectangleInstance({
      name: newNameValue,
      contentName: rectangleInstance.contentName,
      scale: rectangleInstance.scale,
      position: rectangleInstance.position,
      rgb: rectangleInstance.rgb,
    });
  };

  const onScaleValueChange = (newScaleValue: number) => {
    setRectangleInstance({
      name: rectangleInstance.name,
      contentName: rectangleInstance.contentName,
      scale: newScaleValue,
      position: rectangleInstance.position,
      rgb: rectangleInstance.rgb,
    });
  };

  const onPositionValueChange = (newPositionValue: TwoDPoint) => {
    setRectangleInstance({
      name: rectangleInstance.name,
      contentName: rectangleInstance.contentName,
      scale: rectangleInstance.scale,
      position: newPositionValue,
      rgb: rectangleInstance.rgb,
    });
  };

  const submit = async (e: any) => {
    rectangleInstanceSubmitter.submit(rectangleInstance, e, () => {});
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
