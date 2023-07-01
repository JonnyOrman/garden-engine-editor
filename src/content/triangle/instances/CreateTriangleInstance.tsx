import React from 'react';
import CreateContentInstanceProps from '../../instances/CreateContentInstanceProps';
import Triangle from '../Triangle';
import Name from '../../../fields/name/NameEditor';
import ScaleEditor from '../../../fields/scale/ScaleEditor';
import TwoDPoint from '../../../fields/twoDPoint/TwoDPoint';
import TwoDPointEditor from '../../../fields/twoDPoint/TwoDPointEditor';
import { TriangleInstance } from './TriangleInstance';
import { useTriangleInstanceSubmitter } from './useTriangleInstanceSubmitter';
import { useSubmitter } from '../../useSubmitter';

function CreateTriangleInstance(props: CreateContentInstanceProps<Triangle>) {
  const [submit, handleChange, value] = useSubmitter<TriangleInstance>(
    {
      name: '',
      contentName: props.content.name,
      scale: 0,
      position: {
        x: 0,
        y: 0,
      },
    },
    useTriangleInstanceSubmitter(),
    () => {}
  );

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        contentName: value.contentName,
        scale: value.scale,
        position: value.position,
      };
    });
  };

  const onScaleValueChange = (newScaleValue: number) => {
    handleChange(newScaleValue, (newScaleValue: number) => {
      return {
        name: value.name,
        contentName: value.contentName,
        scale: newScaleValue,
        position: value.position,
      };
    });
  };

  const onPositionValueChange = (newPositionValue: TwoDPoint) => {
    handleChange(newPositionValue, (newPositionValue: TwoDPoint) => {
      return {
        name: value.name,
        contentName: value.contentName,
        scale: value.scale,
        position: newPositionValue,
      };
    });
  };

  return (
    <div>
      <h4>Create new instance</h4>
      <form onSubmit={submit}>
        <Name onChange={onNameValueChange}></Name>
        <ScaleEditor onChange={onScaleValueChange}></ScaleEditor>
        <TwoDPointEditor onChange={onPositionValueChange}></TwoDPointEditor>
        <input type="submit">Create</input>
      </form>
    </div>
  );
}

export default CreateTriangleInstance;
