import CreateContentInstanceProps from '../../../instances/CreateContentInstanceProps';
import EquilateralTriangle from '../EquilateralTriangle';
import React from 'react';
import Name from '../../../../fields/name/NameEditor';
import ScaleEditor from '../../../../fields/scale/ScaleEditor';
import TwoDPointEditor from '../../../../fields/twoDPoint/TwoDPointEditor';
import { useSubmitter } from '../../../useSubmitter';
import { EquilateralTriangleInstance } from './EquilateralTriangleInstance';
import { useEquilateralTriangleInstanceSubmitter } from './useEquilateralTriangleInstanceSubmitter';
import TwoDPoint from '../../../../fields/twoDPoint/TwoDPoint';

function CreateEquilateralTriangleInstance(
  props: CreateContentInstanceProps<EquilateralTriangle>
) {
  const [submit, handleChange, value] =
    useSubmitter<EquilateralTriangleInstance>(
      {
        name: '',
        contentName: props.content.name,
        scale: 0,
        position: {
          x: 0,
          y: 0,
        },
      },
      useEquilateralTriangleInstanceSubmitter(),
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
    handleChange<number>(newScaleValue, (newScaleValue: number) => {
      return {
        name: value.name,
        contentName: value.contentName,
        scale: newScaleValue,
        position: value.position,
      };
    });
  };

  const onPositionValueChange = (newPositionValue: TwoDPoint) => {
    handleChange<TwoDPoint>(newPositionValue, (newPositionValue: TwoDPoint) => {
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
        <input type="submit" value="Create" />
      </form>
    </div>
  );
}

export default CreateEquilateralTriangleInstance;
