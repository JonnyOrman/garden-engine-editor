import React from 'react';
import Scene from './Scene';
import DimensionEditor from '../fields/dimension/DimensionEditor';
import { useValidatedChangeHandler } from '../fields/useValidatedChangeHandler';
import ValidatedField from '../fields/ValidatedField';

export const SceneEditor = (props: { onChange: (newValue: Scene) => void }) => {
  const defaultValue = {
    width: 0,
    height: 0,
  };

  const [handleChange, value, error] = useValidatedChangeHandler<Scene>(
    'Scale',
    props.onChange,
    defaultValue
  );

  const onWidthChange = (newWidth: number) => {
    const newScene = {
      width: newWidth,
      height: value.height,
    };
    handleChange(newScene);
  };

  const onHeightChange = (newHeight: number) => {
    const newScene = {
      width: value.width,
      height: newHeight,
    };
    handleChange(newScene);
  };

  return (
    <ValidatedField name="Scene" value={defaultValue} error={error}>
      <DimensionEditor dimension="Width" onChange={onWidthChange} />
      <DimensionEditor dimension="Height" onChange={onHeightChange} />
    </ValidatedField>
  );
};
