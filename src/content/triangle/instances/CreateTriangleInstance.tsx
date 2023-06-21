import react, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentInstanceProps from '../../instances/CreateContentInstanceProps';
import Triangle from '../Triangle';
import React from 'react';
import Name from '../../../fields/name/NameEditor';
import ScaleEditor from '../../../fields/scale/ScaleEditor';
import TwoDPoint from '../../../fields/twoDPoint/TwoDPoint';
import TwoDPointEditor from '../../../fields/twoDPoint/TwoDPointEditor';
import { TriangleInstance } from './TriangleInstance';
import { useTriangleInstanceSubmitter } from './useTriangleInstanceSubmitter';

function CreateTriangleInstance(
  props: CreateContentInstanceProps<Triangle>
) {
  const triangleInstanceSubmitter = useTriangleInstanceSubmitter();

  const [triangleInstance, setTriangleInstance] = useState<TriangleInstance>({
    name: '',
    contentName: props.content.name,
    scale: 0,
    position: { x: 0, y: 0 },
  });

  const onNameValueChange = (newNameValue: string) => {
    setTriangleInstance({
      name: newNameValue,
      contentName: triangleInstance.contentName,
      scale: triangleInstance.scale,
      position: triangleInstance.position,
    });
  };

  const onScaleValueChange = (newScaleValue: number) => {
    setTriangleInstance({
      name: triangleInstance.name,
      contentName: triangleInstance.contentName,
      scale: newScaleValue,
      position: triangleInstance.position,
    });
  };

  const onPositionValueChange = (newPositionValue: TwoDPoint) => {
    setTriangleInstance({
      name: triangleInstance.name,
      contentName: triangleInstance.contentName,
      scale: triangleInstance.scale,
      position: newPositionValue,
    });
  };

  const submit = async (e: any) => {
    triangleInstanceSubmitter.submit(triangleInstance, e, () => {});
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

export default CreateTriangleInstance;
